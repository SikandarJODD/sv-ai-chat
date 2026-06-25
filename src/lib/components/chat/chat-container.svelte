<script lang="ts">
	import { user } from '$lib/config/user.svelte';
	import ChatFooter from './chat-footer.svelte';
	import ChatHeader from './chat-header.svelte';
	import MainChat from './main-chat.svelte';
</script>

<div class="flex flex-col h-full w-full">
	{#if !user.isAuthenticated}
		<ChatHeader />
	{/if}
	<div class="flex-1">
		<MainChat />
	</div>
	{#if !user.isAuthenticated}
		<ChatFooter />
	{/if}
</div>
