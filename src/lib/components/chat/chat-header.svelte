<script lang="ts">
	import LoginModal from '../auth/login-modal.svelte';
</script>

<div class="flex w-full justify-between items-center px-6 py-2">
	<h1 class='font-medium font-mono tracking-tight'>Svelte AI Chat</h1>
	<div class="flex gap-2">
		<LoginModal class="rounded-full" size="lg" />
		<LoginModal text="Sign up for free" size="lg" class="rounded-full" variant="outline" />
	</div>
</div>
