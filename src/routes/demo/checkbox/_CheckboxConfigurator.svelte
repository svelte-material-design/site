<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import {
		Configurator,
		generateSvelteCode,
		generateSvelteTagCode,
	} from "src/components/configurator";
	import { Checkbox } from "@smui/core/checkbox";
	import CheckboxOptions from "./_CheckboxOptions.svelte";

	let checked: boolean;
	let ripple: boolean = true;
	let density: number;
	let expandedTouchTarget: boolean = true;
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
			${getCheckboxCode(
				checked,
				ripple,
				density,
				expandedTouchTarget,
				allowIndeterminated,
				disabled,
				readonly,
				required
			)}
			<Label>Label</Label>
		`,
	});

	function getCheckboxCode(
		checkedValue: typeof checked,
		rippleValue: typeof ripple,
		densityValue: typeof density,
		expandedTouchTargetValue: typeof expandedTouchTarget,
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
				[!rippleValue, "ripple={false}"],
				[!expandedTouchTargetValue, "expandedTouchTarget={false}"],
				[densityValue, `density={${densityValue}}`],
				[checkedValue, "checked"],
				[checkedValue == null, "checked={null}"],
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
				{ripple}
				{density}
				{expandedTouchTarget}
				{allowIndeterminated}
				{disabled}
				{required}
				{readonly} />
			<Label>Label</Label>
		</FormField>
	</div>
	<div slot="values">checked: {checked}</div>
	<div slot="optionsSidebar" class="options-sidebar">
		<CheckboxOptions
			bind:checked
			bind:ripple
			bind:allowIndeterminated
			bind:disabled
			bind:readonly
			bind:density
			bind:expandedTouchTarget
			bind:required />
	</div>
</Configurator>
