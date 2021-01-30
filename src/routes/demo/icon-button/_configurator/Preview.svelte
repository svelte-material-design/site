<svelte:options immutable={true} />

<script lang="ts">
	import { IconButton, Icon } from "@svelte-material-design/core/icon-button";
	import { Icon as IconPreview } from "src/components/configurator/smui-components/icons";
	import type { IconButtonConfigurations } from "./types";

	export let configurations: IconButtonConfigurations;
</script>

<IconButton
	title="button"
	color={configurations.color}
	disabled={configurations.disabled}
	ripple={configurations.ripple}
	iconType={configurations.iconType}
	href={configurations.link ? "javascript:void(0)" : undefined}
>
	<IconPreview component={Icon} type={configurations.iconType} />
</IconButton>
