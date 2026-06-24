import { deserialize } from '$app/forms';
import { invalidateAll } from '$app/navigation';
import type { User } from 'better-auth';

type SignOutResult = { success: boolean };

class UserInfo {
	user: User | null = $state(null);
	isAuthenticated: boolean = $state(false);
	isSigningOut: boolean = $state(false);
	signOutError: string | null = $state(null);

	async signOut() {
		if (this.isSigningOut) {
			return;
		}

		this.isSigningOut = true;
		this.signOutError = null;

		try {
			const response = await fetch('/?/signOut', {
				method: 'POST',
				headers: {
					'x-sveltekit-action': 'true'
				},
				body: new FormData()
			});

			const result = deserialize<SignOutResult, { message?: string }>(await response.text());

			if (result.type === 'success') {
				this.user = null;
				this.isAuthenticated = false;
				await invalidateAll();
				return;
			}

			if (result.type === 'failure') {
				throw new Error(result.data?.message ?? 'Sign out failed');
			}

			throw new Error('Sign out failed');
		} catch (error) {
			this.signOutError = error instanceof Error ? error.message : 'Sign out failed';
		} finally {
			this.isSigningOut = false;
		}
	}
}

export const user = new UserInfo();
