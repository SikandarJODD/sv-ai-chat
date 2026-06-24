<script lang="ts">
	import LoginModal from '$lib/components/auth/login-modal.svelte';
	import { Button } from '$lib/components/ui/button';
	import { user } from '$lib/config/user.svelte';
</script>

<div class="flex justify-center h-screen items-center">
	{#if user.isAuthenticated}
		<div class="flex flex-col items-center gap-3">
			<p>Welcome, {user.user?.name}!</p>
			<Button disabled={user.isSigningOut} onclick={() => user.signOut()}>
				{user.isSigningOut ? 'Signing out...' : 'Logout'}
			</Button>
			{#if user.signOutError}
				<p class="text-sm text-destructive">{user.signOutError}</p>
			{/if}
		</div>
	{:else}
		<p>You are not logged in.</p>
		<!-- <Button href="/login">Login</Button> -->
		<LoginModal />
	{/if}
</div>
