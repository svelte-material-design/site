<script lang="ts">
	import { IconType } from "src/components/configurator/common-options/icons/IconTypeOption.svelte";

	export let type: IconType;
	export let component: any;
	export let button: boolean = false;
</script>

{#if type === 'material-icon'}
	<svelte:component this={component} role={button ? 'button' : undefined}>
		{button ? 'clear' : 'alarm'}
	</svelte:component>
{:else if type === 'svg'}
	<svelte:component
		this={component}
		role={button ? 'button' : undefined}
		type="svg"
		props={{ viewBox: '0 0 24 24' }}>
		<polygon points="0,24 12,0 24,24" />
	</svelte:component>
{:else if type === 'img'}
	<svelte:component
		this={component}
		role={button ? 'button' : undefined}
		type="img"
		props={{ src: '/icons/emojis/grinning-face.png', alt: 'Grinning face' }} />
{/if}
