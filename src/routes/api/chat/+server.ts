// import { adapter } from "$lib/config/ai";
import { chat, toServerSentEventsResponse } from '@tanstack/ai';
import type { RequestHandler } from "./$types";
import { adapter } from '$lib/config/ai';

export const POST: RequestHandler = async ({ request }) => {
    let { messages }: { messages: any[] } = await request.json();
    console.log("messages", messages);
    const stream = chat({
        adapter: adapter,
        messages
    });
    console.log("stream", stream);

    return toServerSentEventsResponse(stream);
};