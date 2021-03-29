<svelte:options immutable={true} />

<script lang="ts">
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import { onMount } from "svelte";
	import { AdditionalListConfigurations } from ".";
	import type { ListConfigurations } from "./types";

	export let configurations: ListConfigurations;
	export let selectionTypeDisabled: boolean = false;
	export let onlySingleSelection: boolean = false;

	onMount(() => {
		updateInstance();
	});

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<Select
	bind:value={configurations.selectionType}
	label="Selection type"
	disabled={selectionTypeDisabled}
	options={[
		...(!configurations.role ? [{ label: "", value: "" }] : []),
		{
			label: "Single",
			value: "single",
		},
		...(!onlySingleSelection
			? [
					{
						label: "Multi",
						value: "multi",
					},
			  ]
			: []),
	]}
	on:change={updateInstance}
/>
<AdditionalListConfigurations bind:configurations />
<Checkbox
	label="Nullable"
	bind:checked={configurations.nullable}
	on:change={updateInstance}
/>
