<svelte:options immutable={true} />

<script lang="typescript">
	import {
		IconButtonColor,
	} from "@svelte-material-design/core/icon-button-toggle";
	import {
		IconButtonToggle,
		IconOn,
		IconOff,
	} from "@svelte-material-design/core/icon-button-toggle";
	import { Icon as IconPreview } from "src/components/configurator/smui-components/icons";
	import type { IconType } from "src/components/configurator/smui-components/icons";

	export let disabled: boolean = false;
	export let ripple: boolean = true;
	export let iconType: IconType = "material-icon";
	export let active: boolean = false;
	export let color: IconButtonColor = "inherit";
</script>

<IconButtonToggle bind:active {disabled} {ripple} {color}>
	<IconPreview type={iconType} component={IconOn} iconContent="star" />
	<IconPreview
		type={iconType}
		component={IconOff}
		iconContent="star_border"
		src="/icons/emojis/grinning-face.png"
		alt="Grinning face"
	>
		<circle
			cx="12"
			cy="12"
			r="10"
			fill="transparent"
			stroke-width="2"
			stroke="black"
		/>
	</IconPreview>
</IconButtonToggle>
