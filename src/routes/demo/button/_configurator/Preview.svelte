<svelte:options immutable={true} />

<script lang="ts">
	import { Button, Label, Icon } from "@smui/core/button";
	import type { ButtonColor, ButtonVariant } from "@smui/core/button";
	import {
		LeadingIcon,
		TrailingIcon,
	} from "src/components/configurator/smui-components/icons";
	import type {
		IconType,
	} from "src/components/configurator/smui-components/icons";
	import { getCustomStyleClass } from "./code";
	import classes from "./button.module.scss";

	export let disabled: boolean = false;
	export let ripple: boolean = true;
	export let variant: ButtonVariant = "text";
	export let link: boolean = false;
	export let color: ButtonColor = "primary";
	export let iconOnly: boolean = false;
	export let leadingIcon: IconType = undefined;
	export let trailingIcon: IconType = undefined;
	export let customStyle: "mdc-mixins" | "custom-css" | "" = "";
	export let accessibleTouch: boolean = false;
</script>

<Button
	style={iconOnly ? "padding: 0;" : undefined}
	class={classes[getCustomStyleClass(customStyle)]}
	{disabled}
	{ripple}
	{variant}
	href={link ? "javascript:void(0)" : undefined}
	target={link ? "_blank" : undefined}
	{color}
	{accessibleTouch}
>
	<LeadingIcon
		component={Icon}
		type={leadingIcon}
		style={iconOnly ? "margin: 0;" : undefined}
	/>
	{#if !iconOnly}
		<Label>Button</Label>
	{/if}
	<TrailingIcon component={Icon} type={trailingIcon} />
</Button>
