<svelte:options immutable={true} />

<script lang="ts">
	import { CommonListConfigurations } from "src/routes/demo/list/_configurator/configurations";
	import type { ListConfigurations } from "./types";

	export let configurations: ListConfigurations;
</script>

<CommonListConfigurations bind:configurations />
