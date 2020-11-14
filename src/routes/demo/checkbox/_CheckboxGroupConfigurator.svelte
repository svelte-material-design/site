<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import {
		Configurator,
		generateSvelteCode,
		generateSvelteTagCode,
	} from "src/components/configurator";
	import { Checkbox, CheckboxGroup } from "@smui/core/packages/checkbox";
	import { Select, Option } from "@smui/core/select";
	import { Button } from "@svelte-material-ui-test/core/packages/button";
	import { tick } from "svelte";

	let checked: boolean;
	let allowIndeterminated: boolean;
	let required: boolean;
	let disabled: boolean;
	let readonly: boolean;

	let value: any[] = [];

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
					item.allowIndeterminated,
					item.disabled,
					item.readonly,
					item.required
				)
			)
			.join("\n"),
	});

	function getFormFieldCode(
		checkedValue: typeof checked,
		allowIndeterminatedValue: typeof allowIndeterminated,
		disabledValue: typeof disabled,
		readonlyValue: typeof readonly,
		requiredValue: typeof required
	) {
		return generateSvelteTagCode({
			tag: "FormField",
			content: `
				${getCheckboxCode(
					checkedValue,
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
		checkedValue: typeof checked,
		allowIndeterminatedValue: typeof allowIndeterminated,
		disabledValue: typeof disabled,
		readonlyValue: typeof readonly,
		requiredValue: typeof required
	) {
		return generateSvelteTagCode({
			tag: "Checkbox",
			props: [
				`name="checkbox"`,
				`value="checkbox-value"`,
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

	function handleCheckedSelectChange(_value: string) {
		const value = _value as "checked" | "unchecked" | "indeterminate";
		if (value === "checked" && selectedCheckbox.checked !== true) {
			selectedCheckbox.checked = true;
		} else if (value === "unchecked" && selectedCheckbox.checked !== false) {
			selectedCheckbox.checked = false;
		} else if (value === "indeterminate" && selectedCheckbox.checked != null) {
			selectedCheckbox.checked = null;
		}

		updateCheckboxesInstance();
	}

	function createCheckboxItem(index) {
		return {
			name: `checkbox[]`,
			value: `checkbox:${index}`,
			allowIndeterminated: false,
			disabled: false,
			readonly: false,
			required: false,
			checked: false,
			label: `Checkbox ${index}`,
		};
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
		<div>
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
		<div>
			<FormField>
				<Select
					nullable={false}
					on:change={(event) => handleCheckedSelectChange(event.detail.value)}>
					<span slot="label">Checked value</span>
					<Option
						value="unchecked"
						selected={selectedCheckbox.checked === false}>
						Unchecked
					</Option>
					<Option value="checked" selected={selectedCheckbox.checked === true}>
						Checked
					</Option>
					<Option
						value="indeterminate"
						selected={selectedCheckbox.checked == undefined}
						disabled={!selectedCheckbox.allowIndeterminated}>
						Indeterminate
					</Option>
				</Select>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox
					bind:checked={selectedCheckbox.allowIndeterminated}
					on:change={updateCheckboxesInstance} />
				<Label>Allow indeterminate</Label>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox
					bind:checked={selectedCheckbox.disabled}
					on:change={updateCheckboxesInstance} />
				<Label>Disabled</Label>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox
					bind:checked={selectedCheckbox.readonly}
					on:change={updateCheckboxesInstance} />
				<Label>Readonly</Label>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox
					bind:checked={selectedCheckbox.required}
					on:change={updateCheckboxesInstance} />
				<Label>Required</Label>
			</FormField>
		</div>
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
