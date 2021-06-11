<svelte:options immutable={true} />

<script lang="typescript">
	import {
		IconButtonToggle,
		IconOn,
		IconOff,
	} from "@svelte-material-design/core/icon-button-toggle";
	import { Icon as IconPreview } from "src/components/configurator/smui-components/icons";
	import type { IconButtonToggleConfigurations } from "./types";

	export let configurations: IconButtonToggleConfigurations;

	function handleChange() {
		configurations = { ...configurations };
	}
</script>

<IconButtonToggle
	bind:active={configurations.active}
	disabled={configurations.disabled}
	ripple={configurations.ripple}
	color={configurations.color}
	on:change={handleChange}
>
	<IconPreview
		type={configurations.iconType}
		component={IconOn}
		iconContent="star"
	/>
	<IconPreview
		type={configurations.iconType}
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
