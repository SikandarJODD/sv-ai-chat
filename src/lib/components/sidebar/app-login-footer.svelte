<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import LoginModal from '../auth/login-modal.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	import { fade, slide } from 'svelte/transition';
	let sidebar = useSidebar();
</script>

{#if sidebar.open}
	<Card.Root class="gap-2 py-4 shadow-none">
		<Card.Header class="px-4">
			<Card.Title class="text-sm truncate">Login to Continue..</Card.Title>
			<Card.Description class="text-xs">
				<span in:fade|global={{  duration: 200, delay: 130 }}>
					Log in to get answers based on saved chats, plus create images and upload files.
				</span>
			</Card.Description>
		</Card.Header>
		<Card.Content class="px-4">
			<LoginModal class="w-full rounded-full" size="lg" />
		</Card.Content>
	</Card.Root>
{:else}
	<Sidebar.Menu>
		<Sidebar.MenuItem class="flex items-center justify-center">
			<LoginModal variant="secondary" size="icon-sm" class="rounded-sm" />
		</Sidebar.MenuItem>
	</Sidebar.Menu>
{/if}
