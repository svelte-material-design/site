<script lang="ts" context="module">
	export type ListLayout = "list" | "radios" | "checkboxes";
</script>

<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { Checkbox } from "@smui/core/checkbox";
	import { Select, Option } from "@smui/core/select";
	import { ListRole } from "@smui/core/list";

	export let role: ListRole;

	export let nonInteractive: boolean;
	export let orientation: string;
	export let highlightSelected: boolean = true;

	export let useLabel: boolean = true;
	export let useAriaLabel: boolean;
	export let useTitle: boolean;

	export let labelFn: () => string = undefined;
	export let ariaLabelFn: () => string = undefined;
	export let titleFn: () => string = undefined;

	export let ariaLabel: string;
	$: ariaLabel = useAriaLabel
		? ariaLabelFn
			? ariaLabelFn()
			: "Label"
		: undefined;

	export let label: string;
	$: label = useLabel ? (labelFn ? labelFn() : "Label") : undefined;

	export let title: string;
	$: title = useTitle ? (titleFn ? titleFn() : "Title") : undefined;

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
<div>
	<FormField>
		<Checkbox
			on:change={(event) => (orientation = event.detail.checked ? 'horizontal' : undefined)} />
		<Label>Horizontal</Label>
	</FormField>
</div>
