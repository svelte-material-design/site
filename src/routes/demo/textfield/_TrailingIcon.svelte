<script lang="ts">
	import { Icon } from "@smui/core/textfield/icon";
	import { IconType } from "src/components/configurator/smui-components/icons/IconTypeOption.svelte";

	export let type: IconType;
	export let clearOnTrailingIconClick: boolean;
</script>

{#if type === 'material-icon'}
	<Icon role={clearOnTrailingIconClick ? 'button' : undefined} on:click>
		{clearOnTrailingIconClick ? 'clear' : 'alarm'}
	</Icon>
{:else if type === 'svg'}
	<Icon
		role={clearOnTrailingIconClick ? 'button' : undefined}
		on:click
		type="svg"
		props={{ viewBox: '0 0 24 24' }}>
		<polygon points="0,24 12,0 24,24" />
	</Icon>
{:else if type === 'img'}
	<Icon
		role={clearOnTrailingIconClick ? 'button' : undefined}
		on:click
		type="img"
		props={{ src: '/icons/emojis/grinning-face.png', alt: 'Grinning face' }} />
{/if}
