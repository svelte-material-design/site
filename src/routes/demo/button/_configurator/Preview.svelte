<svelte:options immutable={true} />

<script lang="ts">
	import {
		Button,
		Label,
		LeadingIcon as ButtonLeadingIcon,
		TrailingIcon as ButtonTrailingIcon,
	} from "@svelte-material-design/core/button";
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
	<svelte:fragment slot="leading">
		<LeadingIcon
			component={ButtonLeadingIcon}
			type={$configurations$.leadingIcon}
			style={$configurations$.iconOnly ? "margin: 0;" : undefined}
		/>
	</svelte:fragment>
	{#if !$configurations$.iconOnly}
		<Label>Button</Label>
	{/if}
	<svelte:fragment slot="trailing">
		<TrailingIcon
			component={ButtonTrailingIcon}
			type={$configurations$.trailingIcon}
		/>
	</svelte:fragment>
</Button>
