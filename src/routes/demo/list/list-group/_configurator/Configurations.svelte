<svelte:options immutable={true} />

<script lang="ts">
	import { Section } from "src/components/configurator/molecules/configurations";
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();

	function updateInstance() {
		$configurations$ = { ...$configurations$ };
	}
</script>

<Section>
	<Checkbox
		bind:checked={$configurations$.showSubHeader}
		label="Show sub header"
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={$configurations$.showSeparator}
		label="Show separator"
		on:change={updateInstance}
	/>
</Section>
