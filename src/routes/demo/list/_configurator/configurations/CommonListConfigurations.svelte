<svelte:options immutable={true} />

<script lang="ts">
	import type { BaseListConfigurations } from "../types";
	import { CommonSelectableListConfigurations } from "src/components/configurator/smui-components/list";

	export let configurations: BaseListConfigurations;
</script>

<CommonSelectableListConfigurations
	bind:configurations
	selectionTypeDisabled={!configurations.role}
/>
