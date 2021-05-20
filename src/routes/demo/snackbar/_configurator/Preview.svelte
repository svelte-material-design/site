<svelte:options immutable={true} />

<script lang="ts">
	import { Switch } from "./components/preview";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();

</script>

<Switch bind:configurations={$configurations$} />
