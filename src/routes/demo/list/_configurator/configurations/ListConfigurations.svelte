<svelte:options immutable={true} />

<script lang="ts">
	import { Select } from "src/components/configurator/atoms/configurations";
	import { onMount } from "svelte";
	import type { ListConfigurations } from "../types";

	export let configurations: ListConfigurations;

	onMount(() => {
		updateInstance();
	});

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<Select
	bind:value={configurations.role}
	label="Role"
	nullable={false}
	disabled={configurations.itemsStyle !== "textual"}
	options={[
		{
			label: "",
			value: "",
		},
		{
			label: "listbox",
			value: "listbox",
		},
		{
			label: "radiogroup",
			value: "radiogroup",
		},
		{
			label: "group",
			value: "group",
		},
	]}
	on:change={updateInstance}
/>
<Select
	bind:value={configurations.selectionType}
	label="Selection type"
	nullable={false}
	disabled={!configurations.role}
	options={[
		{
			label: "",
			value: "",
		},
		{
			label: "Single",
			value: "single",
		},
		{
			label: "Multi",
			value: "multi",
		},
	]}
	on:change={updateInstance}
/>
