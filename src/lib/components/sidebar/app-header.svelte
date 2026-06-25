<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import lightFavicon from '$lib/assets/light-favicon.svg';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	import PanelLeft from '@lucide/svelte/icons/panel-left';
	import { cn } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import { fade } from 'svelte/transition';

	let sidebar = useSidebar();
	let toggleSidebar = () => {
		sidebar.toggle();
	};
	$inspect(sidebar.hovered, 'sidebar.hovered');
</script>

<Sidebar.Menu>
	<Sidebar.MenuItem
		class={cn('flex items-center', sidebar.open ? 'justify-between' : 'justify-center')}
	>
		<!-- <span class={cn('font-medium font-mono truncate pl-2', sidebar.open ? 'block' : 'hidden')}>
			Svelte AI Chat
		</span> -->
		{#if sidebar.hovered && !sidebar.open}
			<Sidebar.MenuButton size="icon" class={cn('cursor-e-resize')} onclick={toggleSidebar}>
				<PanelLeft />
			</Sidebar.MenuButton>
		{:else}
			<Sidebar.MenuItem
				class={cn('w-fit', sidebar.open ? 'pl-2' : 'p-0 size-8 flex justify-center items-center')}
			>
				<span in:fade={{ duration: 200 }}
					>{#if mode.current === 'light'}
						<img src={lightFavicon} alt="Svelte AI Chat" class="size-6" />
					{:else}
						<img src={favicon} alt="Svelte AI Chat" class="size-6" />
					{/if}</span
				>
			</Sidebar.MenuItem>
		{/if}
		<Sidebar.MenuButton
			size="icon"
			class={cn('cursor-e-resize', !sidebar.open && 'hidden')}
			onclick={toggleSidebar}
		>
			<PanelLeft />
		</Sidebar.MenuButton>
	</Sidebar.MenuItem>
</Sidebar.Menu>
