<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import {
		Configurator,
		generateSvelteTagCode,
	} from "src/components/configurator";
	import { Checkbox, CheckboxGroup } from "@smui/core/packages/checkbox";
	import { Select, Option } from "@smui/core/select";
	import { Button } from "@svelte-material-ui-test/core/packages/button";
	import { tick } from "svelte";
	import DensityOption from "src/components/configurator/common-options/DensityOption.svelte";
	import CheckboxOptions from "./_CheckboxOptions.svelte";

	let value: string[] = [];

	let checkboxes: CheckboxProps[];
	let selectedCheckboxValue: CheckboxProps["value"];
	let selectedCheckbox: CheckboxProps;
	reset();

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteTagCode({
		tag: "CheckboxGroup",
		props: ["bind:value"],
		content: checkboxes
			.map((item) =>
				getFormFieldCode(
					item.checked,
					item.ripple,
					item.density,
					item.expandedTouchTarget,
					item.allowIndeterminated,
					item.disabled,
					item.readonly,
					item.required
				)
			)
			.join("\n"),
	});

	function getFormFieldCode(
		checkedValue: CheckboxProps["checked"],
		rippleValue: CheckboxProps["ripple"],
		densityValue: CheckboxProps["density"],
		expandedTouchTargetValue: CheckboxProps["expandedTouchTarget"],
		allowIndeterminatedValue: CheckboxProps["allowIndeterminated"],
		disabledValue: CheckboxProps["disabled"],
		readonlyValue: CheckboxProps["readonly"],
		requiredValue: CheckboxProps["required"]
	) {
		return generateSvelteTagCode({
			tag: "FormField",
			content: `
				${getCheckboxCode(
					checkedValue,
					rippleValue,
					densityValue,
					expandedTouchTargetValue,
					allowIndeterminatedValue,
					disabledValue,
					readonlyValue,
					requiredValue
				)}
				<Label>Label</Label>
			`,
			indentSize: 1,
		});
	}

	function getCheckboxCode(
		checkedValue: CheckboxProps["checked"],
		rippleValue: CheckboxProps["ripple"],
		densityValue: CheckboxProps["density"],
		expandedTouchTargetValue: CheckboxProps["expandedTouchTarget"],
		allowIndeterminatedValue: CheckboxProps["allowIndeterminated"],
		disabledValue: CheckboxProps["disabled"],
		readonlyValue: CheckboxProps["readonly"],
		requiredValue: CheckboxProps["required"]
	) {
		return generateSvelteTagCode({
			tag: "Checkbox",
			props: [
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
			indentSize: 4,
		});
	}

	function updateSelectedCheckbox() {
		const index = checkboxes.findIndex(
			(item) => item.value === selectedCheckboxValue
		);

		if (!~index) return;

		selectedCheckbox = checkboxes[index] = { ...checkboxes[index] };
	}

	function updateCheckboxesInstance() {
		checkboxes = [...checkboxes];
		updateSelectedCheckbox();
	}

	function handleCheckboxChange(checked: boolean, index: number) {
		checkboxes[index].checked = checked;
		updateCheckboxesInstance();
	}

	function createCheckboxItem(index) {
		return {
			name: `checkbox[]`,
			value: `checkbox:${index}`,
			ripple: true,
			density: 0,
			expandedTouchTarget: true,
			allowIndeterminated: false,
			disabled: false,
			readonly: false,
			required: false,
			checked: false,
			label: `Checkbox ${index}`,
		} as CheckboxProps;
	}

	function addCheckbox() {
		const index = Number(
			checkboxes[checkboxes.length - 1]?.value.split(":").slice(-1)[0] ?? -1
		);
		checkboxes.push(createCheckboxItem(index + 1));

		updateCheckboxesInstance();
	}

	function removeCurrentCheckbox() {
		const index = checkboxes.indexOf(selectedCheckbox);
		checkboxes = checkboxes
			.slice(0, index)
			.concat(checkboxes.slice(index + 1, checkboxes.length));

		updateCheckboxesInstance();
	}

	function reset() {
		checkboxes = [] = Array(3)
			.fill("")
			.map((_, index) => {
				return createCheckboxItem(index);
			});

		selectedCheckbox = checkboxes[0];
		tick().then(() => {
			selectedCheckboxValue = checkboxes[0].value;
		});
	}

	interface CheckboxProps {
		name: string;
		value: string;
		ripple: boolean;
		density: number;
		expandedTouchTarget: boolean;
		allowIndeterminated: boolean;
		disabled: boolean;
		readonly: boolean;
		required: boolean;
		checked: boolean;
		label: string;
	}
</script>

<style>
	.preview-container {
		display: flex;
		flex-direction: column;
	}
</style>

<svelte:options immutable={true} />

<Configurator {svelteCode} {scssCode}>
	<div slot="preview" class="preview-container">
		<CheckboxGroup bind:value>
			{#each checkboxes as item, index (item.value)}
				<FormField>
					<Checkbox
						checked={item.checked}
						value={item.value}
						name={item.name}
						ripple={item.ripple}
						density={item.density}
						expandedTouchTarget={item.expandedTouchTarget}
						allowIndeterminated={item.allowIndeterminated}
						disabled={item.disabled}
						required={item.required}
						readonly={item.readonly}
						on:change={(event) => handleCheckboxChange(event.detail.checked, index)} />
					<Label>{item.label}</Label>
				</FormField>
			{/each}
		</CheckboxGroup>
	</div>
	<div slot="values">value: {value.join(', ')}</div>
	<div slot="optionsSidebar" class="options-sidebar">
		<div style="grid-column: span 2;">
			<FormField>
				<Select
					nullable={false}
					bind:value={selectedCheckboxValue}
					on:change={updateSelectedCheckbox}>
					<span slot="label">Checked value</span>
					{#each checkboxes as item (item.value)}
						<Option value={item.value}>{item.label}</Option>
					{/each}
				</Select>
			</FormField>
		</div>
		<CheckboxOptions
			bind:checked={selectedCheckbox.checked}
			bind:ripple={selectedCheckbox.ripple}
			bind:allowIndeterminated={selectedCheckbox.allowIndeterminated}
			bind:disabled={selectedCheckbox.disabled}
			bind:readonly={selectedCheckbox.readonly}
			bind:density={selectedCheckbox.density}
			bind:expandedTouchTarget={selectedCheckbox.expandedTouchTarget}
			bind:required={selectedCheckbox.required}
			on:change={updateCheckboxesInstance} />
		<div
			style="grid-column: span 2; flex-direction: row; justify-content: space-between;">
			<div>
				<Button on:click={reset}>Reset</Button>
			</div>
			<div>
				<Button on:click={removeCurrentCheckbox}>Remove</Button>
				<Button on:click={addCheckbox}>Add</Button>
			</div>
		</div>
	</div>
</Configurator>
