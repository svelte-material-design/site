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
	import IconButtonToggleConfigurations from "./IconButtonToggleConfigurations.svelte";
	import type { IconButtonToggleConfigurations as IconButtonToggleConfigurationsProps } from "../types";

	let disabled: boolean = false;
	let ripple: boolean = true;
	let iconType: IconType = "material-icon";
	let active: boolean = false;
	let color: IconButtonColor = undefined;

	let svelteScriptCode: string;
	let svelteCode: string;

	let iconButtonConfigurations: IconButtonToggleConfigurationsProps;
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
		<IconButtonToggle
			bind:active
			title={{ on: 'button-toggle-on', off: 'button-toggle-off' }}
			{disabled}
			{ripple}
			{color}>
			<IconPreview type={iconType} component={IconOn}>star</IconPreview>
			<IconPreview type={iconType} component={IconOff}>star_border</IconPreview>
		</IconButtonToggle>
	</div>
	<div slot="values">active: {active}</div>
	<div slot="optionsSidebar" class="options-sidebar">
		<IconButtonToggleConfigurations
			bind:color
			bind:disabled
			bind:ripple
			bind:iconType />
	</div>
</Configurator>
