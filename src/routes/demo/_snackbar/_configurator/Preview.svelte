<svelte:options immutable={true} />

<script lang="ts">
	import { Snackbar } from "./components/preview";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();

</script>

<Snackbar bind:configurations={$configurations$} />
