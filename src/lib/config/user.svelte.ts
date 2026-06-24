import { deserialize } from '$app/forms';
import { goto, invalidateAll } from '$app/navigation';
import { createMutation, type CreateMutationResult, type QueryClient } from '@tanstack/svelte-query';
import type { User } from 'better-auth';

type SignOutResult = { success: boolean };

class UserInfo {
	user: User | null = $state(null);
	isAuthenticated: boolean = $state(false);
	isSigningOut: boolean = $state(false);
	signOutError: string | null = $state(null);

	private queryClient: QueryClient | null = null;
	private signOutMutation: CreateMutationResult<SignOutResult, Error, void> | null = null;

	initializeAuthMutations(queryClient: QueryClient) {
		if (this.queryClient === queryClient && this.signOutMutation) {
			return;
		}

		this.queryClient = queryClient;
		this.signOutMutation = createMutation(
			() => ({
				mutationKey: ['auth', 'signOut'],
				mutationFn: async () => {
					const response = await fetch('/?/signOut', {
						method: 'POST',
						headers: {
							'x-sveltekit-action': 'true'
						}
					});

					const payload = await response.text();

					try {
						const result = deserialize<SignOutResult, { message?: string }>(payload);

						if (result.type === 'redirect') {
							await goto(result.location);
							return { success: true };
						}

						if (result.type === 'success') {
							return result.data ?? { success: true };
						}

						if (result.type === 'failure') {
							throw new Error(result.data?.message ?? 'Sign out failed');
						}
					} catch (error) {
						if (error instanceof Error) {
							throw error;
						}
					}

					throw new Error('Sign out failed');
				},
				onMutate: () => {
					this.isSigningOut = true;
					this.signOutError = null;
				},
				onSuccess: async () => {
					this.user = null;
					this.isAuthenticated = false;
					await invalidateAll();
				},
				onError: (error) => {
					this.signOutError = error.message;
				},
				onSettled: () => {
					this.isSigningOut = false;
				}
			}),
			() => queryClient
		);
	}

	async signOut() {
		if (this.isSigningOut || !this.signOutMutation) {
			return;
		}

		try {
			await this.signOutMutation.mutateAsync();
		} catch {
			// The mutation already stores the error state for the UI.
		}
	}
}

export const user = new UserInfo();
