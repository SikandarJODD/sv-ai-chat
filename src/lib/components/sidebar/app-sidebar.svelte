<script lang="ts" module>
	import AudioWaveformIcon from '@lucide/svelte/icons/audio-waveform';
	import CommandIcon from '@lucide/svelte/icons/command';
	import GalleryVerticalEndIcon from '@lucide/svelte/icons/gallery-vertical-end';
	import SquarePenIcon from '@lucide/svelte/icons/square-pen';
	import LibraryIcon from '@lucide/svelte/icons/library';

	// This is sample data
</script>

<script lang="ts">
	import NavMain from './nav-main.svelte';
	import NavProjects from './nav-projects.svelte';
	import NavUser from './nav-user.svelte';
	import TeamSwitcher from './team-switcher.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import type { ComponentProps } from 'svelte';
	import { user } from '$lib/config/user.svelte';
	import AppHeader from './app-header.svelte';
	import AppLoginFooter from './app-login-footer.svelte';

	let {
		ref = $bindable(null),
		collapsible = 'icon',
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();

	const data = {
		teams: [
			{
				name: 'Acme Inc',
				logo: GalleryVerticalEndIcon,
				plan: 'Enterprise'
			},
			{
				name: 'Acme Corp.',
				logo: AudioWaveformIcon,
				plan: 'Startup'
			},
			{
				name: 'Evil Corp.',
				logo: CommandIcon,
				plan: 'Free'
			}
		],
		projects: [
			{
				name: 'New Chat',
				url: '/',
				icon: SquarePenIcon
			},
			{
				name: 'Library',
				url: '#',
				icon: LibraryIcon
			}
			// {
			// 	name: 'Travel',
			// 	url: '#',
			// 	icon: MapIcon
			// }
		]
	};
</script>

<Sidebar.Root bind:ref {collapsible} {...restProps}>
	<Sidebar.Header>
		<AppHeader />
	</Sidebar.Header>
	<Sidebar.Content>
		<!-- <NavMain items={data.navMain} /> -->
		<NavProjects projects={data.projects} />
	</Sidebar.Content>
	<Sidebar.Footer>
		{#if user.isAuthenticated}
			<NavUser />
		{:else}
			<AppLoginFooter />
		{/if}
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
