<svelte:options immutable={true} />

<script lang="ts">
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import { SnackbarConfigurations } from "./components/configurations";

	const { configurations$ } = getConfiguratorContext();

</script>

<SnackbarConfigurations bind:configurations={$configurations$} />
