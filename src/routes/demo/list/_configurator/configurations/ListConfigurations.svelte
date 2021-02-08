<svelte:options immutable={true} />

<script lang="ts">
	import { Select } from "src/components/configurator/atoms/configurations";
	import { onMount } from "svelte";
	import { ListConfigurations } from "../types";

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
			label: "list",
			value: "list",
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
