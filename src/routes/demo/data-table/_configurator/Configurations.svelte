<svelte:options immutable={true} />

<script lang="ts">
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import { Checkbox } from "src/components/configurator/atoms/configurations";

	const { configurations$ } = getConfiguratorContext();

	async function updateInstance() {
		$configurations$ = { ...$configurations$ };
	}
</script>

<Section>
	<Checkbox
		bind:checked={$configurations$.allowSelection}
		label="Allow selection"
		disabled={$configurations$.showPagination}
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={$configurations$.showSelectAll}
		label="Show select all"
		disabled={!$configurations$.allowSelection}
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={$configurations$.allowSorting}
		label="Allow sortimg"
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={$configurations$.showLinearProgress}
		label="Show linear progress"
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={$configurations$.showPagination}
		label="Show pagination"
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={$configurations$.nameColNumeric}
		label="Name column is numeric"
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={$configurations$.descColNumeric}
		label="Description column is numeric"
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={$configurations$.priceColNumeric}
		label="Price column is numeric"
		on:change={updateInstance}
	/>
</Section>
