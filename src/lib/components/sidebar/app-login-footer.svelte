<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import LoginModal from '../auth/login-modal.svelte';
</script>

<Card.Root class="gap-2 py-4 shadow-none">
	<Card.Header class="px-4">
		<Card.Title class="text-sm">Login to Continue..</Card.Title>
		<Card.Description class="text-xs">
			Log in to get answers based on saved chats, plus create images and upload files.
		</Card.Description>
	</Card.Header>
	<Card.Content class="px-4">
		<LoginModal class="w-full rounded-full" size="lg" />
	</Card.Content>
</Card.Root>
