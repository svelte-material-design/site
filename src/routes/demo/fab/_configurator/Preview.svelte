<svelte:options immutable={true} />

<script lang="ts">
	import type { FabVariant, FabColor } from "@smui/core/fab";
	import { Fab, Icon, Label } from "@smui/core/fab";
	import type { IconType } from "src/components/configurator/smui-components/icons";
	import { LeadingIcon } from "src/components/configurator/smui-components/icons";

	export let show: boolean = true;
	export let color: FabColor = "secondary";
	export let variant: FabVariant = "regular";
	export let ripple: boolean = true;
	export let iconType: IconType = "material-icon";
	export let accessibleTouch: boolean = false;
</script>

<Fab {color} {variant} {show} {ripple} {accessibleTouch}>
	<LeadingIcon type={iconType} component={Icon} />
	{#if variant === "extended"}
		<Label>Label</Label>
	{/if}
</Fab>
