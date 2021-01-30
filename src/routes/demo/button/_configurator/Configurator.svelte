<svelte:options immutable={true} />

<script lang="ts">
	import type { ButtonColor, ButtonVariant } from "@smui/core/button";
	import { Configurator } from "src/components/configurator";
	import type {
		IconType,
	} from "src/components/configurator/smui-components/icons";
	import { scss, template, script } from "./code";
	import type { ButtonConfigurations } from "./types";
	import { Configurations, Preview } from ".";

	let disabled: boolean = false;
	let ripple: boolean = true;
	let variant: ButtonVariant = "text";
	let link: boolean = false;
	let color: ButtonColor = "primary";
	let iconOnly: boolean = false;
	let leadingIcon: IconType = undefined;
	let trailingIcon: IconType = undefined;
	let customStyle: "mdc-mixins" | "custom-css" | "" = "";
	let accessibleTouch: boolean = false;

	let svelteScriptCode: string;
	let svelteCode: string;
	let scssCode: string;

	let buttonConfigurations: ButtonConfigurations;
	$: buttonConfigurations = {
		disabled,
		ripple,
		variant,
		link,
		color,
		iconOnly,
		leadingIcon,
		trailingIcon,
		customStyle,
		accessibleTouch,
	};

	$: svelteScriptCode = script(buttonConfigurations);
	$: svelteCode = template(buttonConfigurations);
	$: scssCode = scss(buttonConfigurations);
</script>

<Configurator {svelteScriptCode} {svelteCode} {scssCode}>
	<div slot="preview">
		<Preview
			{iconOnly}
			{disabled}
			{ripple}
			{variant}
			{link}
			{color}
			{accessibleTouch}
			{leadingIcon}
			{trailingIcon}
		/>
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations
			bind:disabled
			bind:ripple
			bind:variant
			bind:link
			bind:color
			bind:iconOnly
			bind:leadingIcon
			bind:trailingIcon
			bind:customStyle
			bind:accessibleTouch
		/>
	</svelte-fragment>
</Configurator>
