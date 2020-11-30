<script lang="ts">
	import { FormField } from "@smui/core/form-field";
	import { Select, Option } from "@smui/core/select";
	import { ListRole } from "@smui/core/list";

	export let role: ListRole;

	function handleRoleChange(newValue: string) {
		if (newValue === "list") role = undefined;
		else role = newValue as ListRole;
	}
</script>

<svelte:options immutable={true} />

<div>
	<FormField>
		<Select
			nullable={false}
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
