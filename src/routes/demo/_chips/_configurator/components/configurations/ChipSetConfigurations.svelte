<svelte:options immutable={true} />

<script lang="ts">
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import type { ChipSetConfigurations } from "../../types";

	export let configurations: ChipSetConfigurations;

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<Select
	bind:value={configurations.variant}
	label="Variant"
	nullable={false}
	options={[
		{ value: "", label: "" },
		{ value: "choice", label: "Choice" },
		{ value: "filter", label: "Filter" },
	]}
	on:change={updateInstance}
	on:change
/>
<Checkbox
	bind:checked={configurations.nullable}
	label="Nullable"
	on:change={updateInstance}
/>
<Checkbox
	bind:checked={configurations.entryAnimation}
	label="Entry animation"
	on:change={updateInstance}
/>
