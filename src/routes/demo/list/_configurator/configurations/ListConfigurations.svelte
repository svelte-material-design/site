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

	function handleRoleChange() {
		if (configurations.role && !configurations.selectionType) {
			configurations.selectionType = "single";
		} else if (!configurations.role) {
			configurations.selectionType = null;
		}
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
	on:change={handleRoleChange}
	on:change={updateInstance}
/>
