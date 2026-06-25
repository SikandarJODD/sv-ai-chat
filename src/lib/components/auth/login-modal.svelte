<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import {
		Button,
		buttonVariants,
		type ButtonSize,
		type ButtonVariant
	} from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import type { Snippet } from 'svelte';
	import { Github, Google } from '../icons';
	import { enhance } from '$app/forms';
	import { cn } from '$lib/utils';

	type Props = {
		size?: ButtonSize;
		variant?: ButtonVariant;
		class?: string;
		open?: boolean;
		text?: string;
	};
	let {
		size = 'default',
		variant = 'default',
		class: className = 'rounded-full',
		text = 'Log in',
		open = $bindable(false)
	}: Props = $props();
</script>

<Dialog.Root bind:open>
	<Dialog.Trigger type="button" class={cn(buttonVariants({ size, variant }), className)}>
		{text}
	</Dialog.Trigger>
	<Dialog.Content class="max-w-xs sm:max-w-sm">
		<Dialog.Header class="mt-4 text-center">
			<Dialog.Title class="text-xl">Log in or signup</Dialog.Title>
			<Dialog.Description class="max-w-[70%] mx-auto">
				You'll get smarter responses and can upload files, images, and more.
			</Dialog.Description>
		</Dialog.Header>
		<div>
			<div class="flex flex-col gap-3">
				<form method="post" action="/?/signInSocial" use:enhance>
					<input type="hidden" name="provider" value="google" />
					<input type="hidden" name="callbackURL" value="/" />
					<Button size="lg" type="submit" variant="outline" class="w-full shadow-none rounded-full">
						<Google />
						<span>Google</span>
					</Button>
				</form>
				<form method="post" action="/?/signInSocial" use:enhance>
					<input type="hidden" name="provider" value="github" />
					<input type="hidden" name="callbackURL" value="/" />
					<Button size="lg" type="submit" variant="outline" class="w-full shadow-none rounded-full">
						<Github />
						<span>Github</span>
					</Button>
				</form>
			</div>
			<!-- <div class="my-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
				<hr class="border-dashed" />
				<span class="text-xs text-muted-foreground">OR</span>
				<hr class="border-dashed" />
			</div> -->
			<!-- <form class="space-y-4" method="post" action="?/signInEmail" use:enhance>
				<div class="space-y-2">
					<Label for="email" class="block text-sm">Email</Label>
					<Input
						type="email"
						required
						name="email"
						id="email"
						placeholder="Email address"
						class="rounded-full"
					/>
					<Input
						type="password"
						required
						name="password"
						id="password"
						placeholder="Password"
						class="rounded-full"
					/>
				</div>
				<Button class="w-full rounded-full" type="submit">Continue</Button>
			</form> -->
		</div>
	</Dialog.Content>
</Dialog.Root>
