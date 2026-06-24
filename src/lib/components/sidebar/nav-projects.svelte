<script lang="ts">
	import { useSidebar } from '$lib/components/ui/sidebar/context.svelte.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import EllipsisIcon from '@lucide/svelte/icons/ellipsis';

	let {
		projects
	}: {
		projects: {
			name: string;
			url: string;
			// This should be `Component` after @lucide/svelte updates types
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			icon: any;
		}[];
	} = $props();

	const sidebar = useSidebar();
</script>

<!-- class="group-data-[collapsible=icon]:hidden" -->
<Sidebar.Menu class="p-2">
	{#each projects as item (item.name)}
		<Sidebar.MenuItem>
			<Sidebar.MenuButton>
				{#snippet child({ props })}
					<a href={item.url} {...props}>
						<item.icon />
						<span>{item.name}</span>
					</a>
				{/snippet}
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>
	{/each}
	<!-- <Sidebar.MenuItem>
		<Sidebar.MenuButton class="text-sidebar-foreground/70">
			<EllipsisIcon class="text-sidebar-foreground/70" />
			<span>More</span>
		</Sidebar.MenuButton>
	</Sidebar.MenuItem> -->
</Sidebar.Menu>
