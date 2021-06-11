<svelte:options immutable={true} />

<script lang="ts">
	import { Radio } from "./components/preview";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();
</script>

<Radio bind:configurations={$configurations$} />
