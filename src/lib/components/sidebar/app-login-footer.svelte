<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<Card.Root class="gap-2 py-4 shadow-none">
	<Card.Header class="px-4">
		<Card.Title class="text-sm">Login to Continue..</Card.Title>
		<Card.Description class='text-xs'>
			Log in to get answers based on saved chats, plus create images and upload files.
		</Card.Description>
	</Card.Header>
	<Card.Content class="px-4">
		<Button href='/login' class="rounded-full w-full" size="lg">Login</Button>
	</Card.Content>
</Card.Root>
