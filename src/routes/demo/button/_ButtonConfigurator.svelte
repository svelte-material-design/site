<script lang="ts">
	import { Button, Label, ButtonVariant, Icon } from "@smui/core/button";
	import { Configurator } from "src/components/configurator";
	import {
		IconType,
		LeadingIcon,
		TrailingIcon,
	} from "src/components/configurator/smui-components/icons";
	import { scss, template, getCustomStyleClass } from "./code";
	import classes from "./button.module.scss";
	import ButtonConfigurations from "./_configurations/ButtonConfigurations.svelte";

	let disabled: boolean = false;
	let ripple: boolean = true;
	let variant: ButtonVariant = undefined;
	let link: boolean = false;
	let secondary: boolean = false;
	let iconOnly: boolean = false;
	let leadingIcon: IconType = undefined;
	let trailingIcon: IconType = undefined;
	let customStyle: "mdc-mixins" | "custom-css" | "" = "";

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = template({
		disabled,
		ripple,
		variant,
		link,
		secondary,
		iconOnly,
		leadingIcon,
		trailingIcon,
		customStyle,
	});

	$: scssCode = scss({
		disabled,
		ripple,
		variant,
		link,
		secondary,
		iconOnly,
		leadingIcon,
		trailingIcon,
		customStyle,
	});
</script>

<svelte:options immutable={true} />

<Configurator {svelteCode} {scssCode}>
	<div slot="preview">
		<Button
			style={iconOnly ? 'padding: 0;' : undefined}
			class={classes[getCustomStyleClass(customStyle)]}
			{disabled}
			{ripple}
			{variant}
			href={link ? 'javascript:void(0)' : undefined}
			target={link ? '_blank' : undefined}
			color={secondary ? 'secondary' : undefined}>
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
	<div slot="optionsSidebar" class="options-sidebar">
		<ButtonConfigurations
			bind:disabled
			bind:ripple
			bind:variant
			bind:link
			bind:secondary
			bind:iconOnly
			bind:leadingIcon
			bind:trailingIcon
			bind:customStyle />
	</div>
</Configurator>
