<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { Checkbox } from "@smui/core/packages/checkbox";
	import { Select, Option } from "@smui/core/select";
	import { createEventDispatcher, tick } from "svelte";
	import DensityOption from "src/components/configurator/common-options/DensityOption.svelte";

	export let checked: boolean;
	export let ripple: boolean;
	export let density: number;
	export let expandedTouchTarget: boolean;
	export let allowIndeterminated: boolean;
	export let disabled: boolean;
	export let readonly: boolean;
	export let required: boolean;

	const dispatch = createEventDispatcher();

	function handleCheckedSelectChange(_value: string) {
		const value = _value as "checked" | "unchecked" | "indeterminate";
		if (value === "checked" && checked !== true) {
			checked = true;
		} else if (value === "unchecked" && checked !== false) {
			checked = false;
		} else if (value === "indeterminate" && checked != null) {
			checked = null;
		}

		handleChange();
	}

	function handleChange() {
		dispatch("change");
	}
</script>

<div>
	<FormField>
		<Select
			nullable={false}
			on:change={(event) => handleCheckedSelectChange(event.detail.value)}>
			<span slot="label">Checked value</span>
			<Option value="unchecked" selected={checked === false}>Unchecked</Option>
			<Option value="checked" selected={checked === true}>Checked</Option>
			<Option
				value="indeterminate"
				selected={checked == undefined}
				disabled={!allowIndeterminated}>
				Indeterminate
			</Option>
		</Select>
	</FormField>
</div>
<div>
	<DensityOption bind:density on:change={handleChange} max={3} />
</div>
<div>
	<FormField>
		<Checkbox bind:checked={ripple} on:change={handleChange} />
		<Label>Ripple</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={expandedTouchTarget} on:change={handleChange} />
		<Label>Expanded touch target</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={allowIndeterminated} on:change={handleChange} />
		<Label>Allow indeterminate</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={disabled} on:change={handleChange} />
		<Label>Disabled</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={readonly} on:change={handleChange} />
		<Label>Readonly</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={required} on:change={handleChange} />
		<Label>Required</Label>
	</FormField>
</div>
