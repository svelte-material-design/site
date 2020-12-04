<script lang="ts">
	import { FormField } from "@smui/core/form-field";
	import { Select, Option } from "@smui/core/select";
	import { ListRole, ListType } from "@smui/core/list";
	import { UseState } from "@smui/core/common/hooks";
	import { createEventDispatcher, tick } from "svelte";

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

<svelte:options immutable={true} />

<UseState value={type} onUpdate={handleTypeUpdate} />

<div>
	<FormField>
		<Select
			nullable={false}
			disabled={type !== 'textual'}
			on:change={(event) => handleRoleChange(event.detail.value)}>
			<span slot="label">Role</span>
			<div slot="options">
				<Option value="list" selected={role == null}>list</Option>
				<Option value="radiogroup" selected={role == 'radiogroup'}>
					radiogroup
				</Option>
				<Option value="group" selected={role == 'group'}>group</Option>
			</div>
		</Select>
	</FormField>
</div>
