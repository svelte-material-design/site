<script lang="typescript">
	import {
		IconButtonToggle,
		IconOn,
		IconOff,
		IconButtonColor,
	} from "@smui/core/icon-button-toggle";
	import { Configurator } from "src/components/configurator";
	import {
		IconType,
		Icon as IconPreview,
	} from "src/components/configurator/smui-components/icons";
	import { template, script } from "./code";
	import Configurations from "./Configurations.svelte";
	import type { IconButtonToggleConfigurations } from "../types";

	let disabled: boolean = false;
	let ripple: boolean = true;
	let iconType: IconType = "material-icon";
	let active: boolean = false;
	let color: IconButtonColor = "inherit";

	let svelteScriptCode: string;
	let svelteCode: string;

	let iconButtonConfigurations: IconButtonToggleConfigurations;
	$: iconButtonConfigurations = {
		disabled,
		ripple,
		color,
		iconType,
	};

	$: svelteScriptCode = script();
	$: svelteCode = template(iconButtonConfigurations);
</script>

<style lang="scss">
	.options-sidebar {
		grid-template: auto;
	}
</style>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview">
		<IconButtonToggle bind:active {disabled} {ripple} {color}>
			<IconPreview type={iconType} component={IconOn} iconContent="star" />
			<IconPreview
				type={iconType}
				component={IconOff}
				iconContent="star_border"
				src="/icons/emojis/grinning-face.png"
				alt="Grinning face">
				<circle
					cx="12"
					cy="12"
					r="10"
					fill="transparent"
					stroke-width="2"
					stroke="black" />
			</IconPreview>
		</IconButtonToggle>
	</div>
	<div slot="values">active: {active}</div>
	<div slot="optionsSidebar" class="options-sidebar">
		<Configurations bind:color bind:disabled bind:ripple bind:iconType />
	</div>
</Configurator>
