<script lang="ts">
	import { IconType } from "src/components/configurator/common-options/IconTypeOption.svelte";

	export let type: IconType;
	export let component: any;
</script>

{#if type === 'material-icon'}
	<svelte:component this={component}>event</svelte:component>
{:else if type === 'svg'}
	<svelte:component
		this={component}
		type="svg"
		props={{ viewBox: '0 0 24 24' }}>
		<circle cx="12" cy="12" r="12" />
	</svelte:component>
{:else if type === 'img'}
	<svelte:component
		this={component}
		type="img"
		props={{ src: '/icons/emojis/upside-down-face.png', alt: 'Upside down face' }} />
{/if}
