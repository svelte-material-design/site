<svelte:options immutable={true} />

<script lang="ts">
	import { Button, Label, Icon } from "@svelte-material-design/core/button";
	import {
		LeadingIcon,
		TrailingIcon,
	} from "src/components/configurator/smui-components/icons";
	import { getCustomStyleClass } from "./code";
	import classes from "./button.module.scss";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();
</script>

<Button
	style={$configurations$.iconOnly ? "padding: 0;" : undefined}
	class={classes[getCustomStyleClass($configurations$.customStyle)]}
	disabled={$configurations$.disabled}
	ripple={$configurations$.ripple}
	variant={$configurations$.variant}
	href={$configurations$.link ? "javascript:void(0)" : undefined}
	target={$configurations$.link ? "_blank" : undefined}
	color={$configurations$.color}
	accessibleTouch={$configurations$.accessibleTouch}
>
	<LeadingIcon
		component={Icon}
		type={$configurations$.leadingIcon}
		style={$configurations$.iconOnly ? "margin: 0;" : undefined}
	/>
	{#if !$configurations$.iconOnly}
		<Label>Button</Label>
	{/if}
	<TrailingIcon component={Icon} type={$configurations$.trailingIcon} />
</Button>
