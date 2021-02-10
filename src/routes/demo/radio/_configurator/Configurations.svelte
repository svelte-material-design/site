<svelte:options immutable={true} />

<script lang="ts">
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import { RadioConfigurations } from "./configurations";

	const { configurations$ } = getConfiguratorContext();
</script>

<RadioConfigurations bind:configurations={$configurations$} />
