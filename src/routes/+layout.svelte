<script lang="ts">
	import './layout.css';
	import AppSidebar from '$lib/components/sidebar/app-sidebar.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import favicon from '$lib/assets/favicon.svg';
	import lightFavicon from '$lib/assets/light-favicon.svg';
	import { activeElement, PressedKeys } from 'runed';
	import { mode, ModeWatcher, toggleMode } from 'mode-watcher';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { browser } from '$app/env';
	import { user } from '$lib/config/user.svelte.js';
	import { untrack } from 'svelte';

	let { children, data } = $props();
	user.user = untrack(() => data.user);
	user.isAuthenticated = untrack(() => data.isAuthenticated);

	let keys = new PressedKeys();
	keys.onKeys(['d'], () => {
		if (
			activeElement.current?.localName === 'input' ||
			activeElement.current?.localName === 'textarea'
		)
			return;
		toggleMode();
	});

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<svelte:head>
	{#if mode.current === 'light'}
		<link rel="icon" href={lightFavicon} />
	{:else}
		<link rel="icon" href={favicon} />
	{/if}
</svelte:head>

<ModeWatcher defaultMode="dark" />
<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<QueryClientProvider client={queryClient}>
			{@render children()}
		</QueryClientProvider>
	</Sidebar.Inset>
</Sidebar.Provider>
