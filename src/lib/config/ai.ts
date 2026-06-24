import { OPENROUTER_API_KEY } from '$app/env/private';
import { createOpenRouterText } from '@tanstack/ai-openrouter';

export let adapter = createOpenRouterText('openrouter/owl-alpha', OPENROUTER_API_KEY, {
    appTitle: 'Svelte AI Chat',
    // httpReferer: 'https://svelte-ai-chat.vercel.app',
    // serverURL: 'https://openrouter.ai/api/v1' // Optional
});