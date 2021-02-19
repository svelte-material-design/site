<svelte:options immutable={true} />

<script lang="ts">
	import type { BaseListConfigurations } from "../types";
	import { CommonListConfigurations } from "src/components/configurator/smui-components/list";

	export let configurations: BaseListConfigurations;
</script>

<CommonListConfigurations bind:configurations listRole={configurations.role} />
