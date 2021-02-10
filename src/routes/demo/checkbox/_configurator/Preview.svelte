<svelte:options immutable={true} />

<script lang="ts">
	import { Checkbox } from "./preview";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();
</script>

<Checkbox bind:configurations={$configurations$} />
