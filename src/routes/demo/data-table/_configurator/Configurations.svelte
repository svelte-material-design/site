<svelte:options immutable={true} />

<script lang="ts">
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";

	const { configurations$ } = getConfiguratorContext();

	async function handleChange() {
		if (!$configurations$.selectionType && $configurations$.showSelectAll) {
			$configurations$.showSelectAll = false;
		}

		$configurations$ = { ...$configurations$ };
	}
</script>

<Section>
	<Select
		bind:value={$configurations$.selectionType}
		options={[
			{ value: "", label: "" },
			{ value: "multi", label: "Multi" },
			{ value: "single", label: "Single" },
		]}
		label="Selection type"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={$configurations$.showSelectAll}
		label="Show select all"
		disabled={!$configurations$.selectionType}
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={$configurations$.nullable}
		label="Nullable"
		disabled={!$configurations$.selectionType}
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={$configurations$.allowSorting}
		label="Allow sortimg"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={$configurations$.showLinearProgress}
		label="Show linear progress"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={$configurations$.showPagination}
		label="Show pagination"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={$configurations$.priceColAlignEnd}
		label="Price column align end"
		on:change={handleChange}
	/>
</Section>
