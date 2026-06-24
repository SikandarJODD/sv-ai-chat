<script lang="ts">
	import { createChat, fetchServerSentEvents } from '@tanstack/ai-svelte';

	let input = $state('');
	let chat = createChat({
		connection: fetchServerSentEvents('/api/chat')
	});

	let handleSubmit = () => {
		if (input.trim() === '') return;
		chat.sendMessage(input);
		input = '';
	};
</script>

<div>
	<div>
		<input
			type="text"
			name="input"
			id="input"
			bind:value={input}
			onkeydown={(e) => e.key === 'Enter' && handleSubmit()}
		/>
		<button disabled={chat.isLoading} onclick={handleSubmit}>Submit</button>
	</div>

	<div>
		{#each chat.messages as message}
			<div>
				<strong>{message.role}:</strong>
				{#each message.parts as part}
					{#if part.type === 'text'}
						<span>{part.content}</span>
					{/if}
				{/each}
			</div>
		{/each}
	</div>
</div>
