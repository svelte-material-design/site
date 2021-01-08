<script lang="ts">
	import { Button, Label, Icon } from "@smui/core/button";
	import type { ButtonColor, ButtonVariant } from "@smui/core/button";
	import { Configurator } from "src/components/configurator";
	import {
		IconType,
		LeadingIcon,
		TrailingIcon,
	} from "src/components/configurator/smui-components/icons";
	import { scss, template, getCustomStyleClass, script } from "./code";
	import classes from "./button.module.scss";
	import { ButtonConfigurations } from "./types";
	import Configurations from "./Configurations.svelte";

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

<svelte:options immutable={true} />

<Configurator {svelteScriptCode} {svelteCode} {scssCode}>
	<div slot="preview">
		<Button
			style={iconOnly ? 'padding: 0;' : undefined}
			class={classes[getCustomStyleClass(customStyle)]}
			{disabled}
			{ripple}
			{variant}
			href={link ? 'javascript:void(0)' : undefined}
			target={link ? '_blank' : undefined}
			{color}
			{accessibleTouch}>
			<LeadingIcon
				component={Icon}
				type={leadingIcon}
				style={iconOnly ? 'margin: 0;' : undefined} />
			{#if !iconOnly}
				<Label>Button</Label>
			{/if}
			<TrailingIcon component={Icon} type={trailingIcon} />
		</Button>
	</div>
	<div slot="optionsSidebar">
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
			bind:accessibleTouch />
	</div>
</Configurator>
