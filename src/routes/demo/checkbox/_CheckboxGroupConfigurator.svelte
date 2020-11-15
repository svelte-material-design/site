<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import {
		Configurator,
		generateSvelteTagCode,
	} from "src/components/configurator";
	import { Checkbox, CheckboxGroup } from "@smui/core/packages/checkbox";
	import { Select, Option } from "@smui/core/select";
	import CheckboxOptions from "./_CheckboxOptions.svelte";
	import MultipleItemControls from "src/components/configurator/common-options/MultipleItemControls.svelte";

	let multipleItemsControls: MultipleItemControls;

	let value: string[] = [];

	let checkboxes: CheckboxProps[] = [];
	let selectedCheckboxValue: CheckboxProps["value"];
	let selectedCheckbox: CheckboxProps = {} as any;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteTagCode({
		tag: "CheckboxGroup",
		props: ["bind:value"],
		content: checkboxes
			?.map((item) =>
				getFormFieldCode(
					item.name,
					item.value,
					item.checked,
					item.ripple,
					item.density,
					item.expandedTouchTarget,
					item.allowIndeterminated,
					item.disabled,
					item.readonly,
					item.required,
					item.label
				)
			)
			.join("\n"),
	});

	function getFormFieldCode(
		name: CheckboxProps["name"],
		value: CheckboxProps["value"],
		checkedValue: CheckboxProps["checked"],
		rippleValue: CheckboxProps["ripple"],
		densityValue: CheckboxProps["density"],
		expandedTouchTargetValue: CheckboxProps["expandedTouchTarget"],
		allowIndeterminatedValue: CheckboxProps["allowIndeterminated"],
		disabledValue: CheckboxProps["disabled"],
		readonlyValue: CheckboxProps["readonly"],
		requiredValue: CheckboxProps["required"],
		labelValue: CheckboxProps["label"]
	) {
		return generateSvelteTagCode({
			tag: "FormField",
			content: `
				${getCheckboxCode(
					name,
					value,
					checkedValue,
					rippleValue,
					densityValue,
					expandedTouchTargetValue,
					allowIndeterminatedValue,
					disabledValue,
					readonlyValue,
					requiredValue
				)}
				<Label>${labelValue}</Label>
			`,
			indentSize: 1,
		});
	}

	function getCheckboxCode(
		name: CheckboxProps["name"],
		value: CheckboxProps["value"],
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
				`name="${name}"`,
				`value="${value}"`,
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

	function handleCheckboxChange(checked: boolean, index: number) {
		checkboxes[index].checked = checked;
		multipleItemsControls.updateItemsInstance();
	}

	function createCheckboxItem(index) {
		const value = `checkbox:${index}`;
		return {
			id: value,
			name: `checkbox[]`,
			value,
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

	interface CheckboxProps {
		id: string;
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
					on:change={multipleItemsControls.updateSelectedInstance}>
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
			on:change={multipleItemsControls.updateItemsInstance} />

		<MultipleItemControls
			bind:this={multipleItemsControls}
			bind:items={checkboxes}
			bind:selectedItem={selectedCheckbox}
			bind:selectedItemId={selectedCheckboxValue}
			itemFactory={createCheckboxItem} />
	</div>
</Configurator>
