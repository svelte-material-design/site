<svelte:options immutable={true} />

<script lang="ts">
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import { CheckboxConfigurations } from "./components/configurations";

	const { configurations$ } = getConfiguratorContext();
</script>

<CheckboxConfigurations bind:configurations={$configurations$} />
