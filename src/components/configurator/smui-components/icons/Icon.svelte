<script lang="ts">
	import { IconType } from ".";

	export let type: IconType;
	export let component: any;
	export let button: boolean = false;
</script>

{#if type === 'material-icon'}
	<svelte:component this={component} role={button ? 'button' : undefined}>
		{#if $$slots.default}
			<slot />
		{:else}refresh{/if}
	</svelte:component>
{:else if type === 'svg'}
	<svelte:component
		this={component}
		role={button ? 'button' : undefined}
		type="svg"
		props={{ viewBox: '0 0 24 24' }}>
		{#if $$slots.default}
			<slot />
		{:else}
			<circle cx="12" cy="12" r="12" />
		{/if}
	</svelte:component>
{:else if type === 'img'}
	<svelte:component
		this={component}
		role={button ? 'button' : undefined}
		type="img"
		props={{ src: '/icons/emojis/upside-down-face.png', alt: 'Upside down face' }} />
{/if}
