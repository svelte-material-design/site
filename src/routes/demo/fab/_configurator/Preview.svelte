<svelte:options immutable={true} />

<script lang="ts">
	import { Fab, Icon, Label } from "@svelte-material-design/core/fab";
	import { LeadingIcon } from "src/components/configurator/smui-components/icons";
	import type { FabConfigurations } from "./types";

	export let configurations: FabConfigurations;

</script>

<Fab
	color={configurations.color}
	variant={configurations.variant}
	show={configurations.show}
	ripple={configurations.ripple}
	accessibleTouch={configurations.accessibleTouch}
>
	<LeadingIcon type={configurations.iconType} component={Icon} />
	{#if configurations.variant === "extended"}
		<Label>Label</Label>
	{/if}
</Fab>
