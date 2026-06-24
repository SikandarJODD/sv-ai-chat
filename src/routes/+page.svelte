<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import { user } from '$lib/config/user.svelte';
</script>

<div class="flex justify-center h-screen items-center">
	{#if user.isAuthenticated}
		<p>Welcome, {user.user?.name}!</p>
		<form
			method="POST"
			use:enhance={(form) => {
				return async ({ result, update }) => {
					console.log('Logout result:', result);
					if (result.type === 'success') {
						user.user = null;
						user.isAuthenticated = false;
					}
				};
			}}
			action="?/signOut"
		>
			<Button type="submit">Logout</Button>
		</form>
	{:else}
		<p>You are not logged in.</p>
		<Button href="/login">Login</Button>
	{/if}
</div>
