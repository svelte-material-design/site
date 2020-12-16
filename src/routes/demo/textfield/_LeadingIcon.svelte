<script lang="ts">
	import { Icon } from "@smui/core/textfield/icon";
	import { IconType } from "src/components/configurator/smui-components/icons/IconTypeOption.svelte";

	export let type: IconType;
</script>

{#if type === 'material-icon'}
	<Icon>event</Icon>
{:else if type === 'svg'}
	<Icon type="svg" props={{ viewBox: '0 0 24 24' }}>
		<circle cx="12" cy="12" r="12" />
	</Icon>
{:else if type === 'img'}
	<Icon
		type="img"
		props={{ src: '/icons/emojis/upside-down-face.png', alt: 'Upside down face' }} />
{/if}
