<svelte:options immutable={true} />

<script lang="ts">
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { createEventDispatcher, tick } from "svelte";
	import { Select } from "src/components/configurator/atoms/configurations";
	import type { ListConfigurations } from "../types";

	export let configurations: ListConfigurations;

	const dispatch = createEventDispatcher<{
		change: void;
	}>();

	async function handleTypeUpdate() {
		configurations.role = "list";

		handleChange();
	}

	async function handleChange() {
		await tick();

		dispatch("change");
	}
</script>

<UseState value={configurations.type} onUpdate={handleTypeUpdate} />

<Select
	bind:value={configurations.role}
	label="Role"
	nullable={false}
	disabled={configurations.type !== "textual"}
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
	on:change={handleChange}
/>
