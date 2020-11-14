<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import {
		Configurator,
		generateSvelteCode,
		generateSvelteTagCode,
	} from "src/components/configurator";
	import { Checkbox } from "@smui/core/packages/checkbox";
	import { Select, Option } from "@smui/core/select";

	let checked: boolean;
	let allowIndeterminated: boolean;
	let required: boolean;
	let disabled: boolean;
	let readonly: boolean;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "FormField",
		props: [],
		content: `
			${getCheckboxCode(allowIndeterminated, disabled, readonly, required)}
			<Label>Label</Label>
		`,
	});

	function getCheckboxCode(
		allowIndeterminatedValue: typeof allowIndeterminated,
		disabledValue: typeof disabled,
		readonlyValue: typeof readonly,
		requiredValue: typeof required
	) {
		return generateSvelteTagCode({
			tag: "Checkbox",
			props: [
				"bind:checked",
				`name="checkbox"`,
				`value="checkbox-value"`,
				[allowIndeterminatedValue, "allowIndeterminated"],
				[disabledValue, "disabled"],
				[readonlyValue, "readonly"],
				[requiredValue, "required"],
			],
			indentSize: 3,
		});
	}

	function handleCheckedSelectChange(_value: string) {
		const value = _value as "checked" | "unchecked" | "indeterminate";
		if (value === "checked" && checked !== true) {
			checked = true;
		} else if (value === "unchecked" && checked !== false) {
			checked = false;
		} else if (value === "indeterminate" && checked != null) {
			checked = null;
		}
	}
</script>

<svelte:options immutable={true} />

<Configurator {svelteCode} {scssCode}>
	<div slot="preview" class="preview-container">
		<FormField>
			<Checkbox
				bind:checked
				value="checkbox-value"
				name="checkbox"
				{allowIndeterminated}
				{disabled}
				{required}
				{readonly} />
			<Label>Label</Label>
		</FormField>
	</div>
	<div slot="values">checked: {checked}</div>
	<div slot="optionsSidebar" class="options-sidebar">
		<div>
			<FormField>
				<Select
					nullable={false}
					on:change={(event) => handleCheckedSelectChange(event.detail.value)}>
					<span slot="label">Checked value</span>
					<Option value="unchecked" selected={checked === false}>
						Unchecked
					</Option>
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
			<FormField>
				<Checkbox bind:checked={allowIndeterminated} />
				<Label>Allow indeterminate {allowIndeterminated}</Label>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={disabled} />
				<Label>Disabled</Label>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={readonly} />
				<Label>Readonly</Label>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={required} />
				<Label>Required</Label>
			</FormField>
		</div>
	</div>
</Configurator>
