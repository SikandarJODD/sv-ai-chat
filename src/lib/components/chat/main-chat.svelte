<script lang="ts">
	import * as PromptInput from '$lib/components/ai-elements/prompt-input';
	import type { Message } from '$lib/components/ai-elements/prompt-input';
	function handleSubmit(message: Message) {
		console.log('Submitted message:', message.text);
		console.log('Files', message.files);
	}
</script>

<div class="h-full flex justify-center items-center">
	<div>
		<PromptInput.Root globalDrop maxFiles={2} class="w-xl shadow-none" onSubmit={handleSubmit}>
			<PromptInput.Attachments>
				{#snippet children(file)}
					<PromptInput.Attachment data={file} />
				{/snippet}
			</PromptInput.Attachments>
			<PromptInput.Body>
				<PromptInput.Textarea placeholder="Ask anything..." />
			</PromptInput.Body>
			<PromptInput.Toolbar class="justify-end">
				<PromptInput.Submit />
			</PromptInput.Toolbar>
		</PromptInput.Root>
	</div>
</div>
