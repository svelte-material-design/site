<svelte:options immutable={true} />

<script lang="ts">
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import { SwitchConfigurations } from "./components/configurations";

	const { configurations$ } = getConfiguratorContext();

</script>

<SwitchConfigurations bind:configurations={$configurations$} />
