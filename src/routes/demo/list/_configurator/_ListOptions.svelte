<svelte:options immutable={true} />

<script lang="ts">
	import { ListRole, ListType } from "@smui/core/list";
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { createEventDispatcher, tick } from "svelte";
	import { Select } from "src/components/configurator/atoms/configurations";

	export let role: ListRole;
	export let type: ListType;

	const dispatch = createEventDispatcher<{ change: any }>();

	async function handleRoleChange(newValue: string) {
		if (newValue === "list") role = undefined;
		else role = newValue as ListRole;

		await tick();
		dispatch("change");
	}

	async function handleTypeUpdate() {
		role = "list";

		await tick();
		dispatch("change");
	}
</script>

<UseState value={type} onUpdate={handleTypeUpdate} />

<Select
	label="Role"
	nullable={false}
	disabled={type !== "textual"}
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
	on:change={(event) => handleRoleChange(event.detail.value)}
/>
