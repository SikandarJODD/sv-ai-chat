<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	import PanelLeft from '@lucide/svelte/icons/panel-left';
	import { cn } from '$lib/utils';

	const sidebar = useSidebar();
	let toggleSidebar = () => {
		sidebar.toggle();
	};
</script>

<Sidebar.Menu>
	<Sidebar.MenuItem
		class={cn('flex items-center', sidebar.open ? 'justify-between' : 'justify-center')}
	>
		<span class={cn('font-medium font-mono truncate pl-2', sidebar.open ? 'block' : 'hidden')}>
			Svelte AI Chat
		</span>
		<Sidebar.MenuButton size='icon' class="cursor-e-resize" onclick={toggleSidebar}>
			<PanelLeft />
		</Sidebar.MenuButton>
	</Sidebar.MenuItem>
</Sidebar.Menu>
