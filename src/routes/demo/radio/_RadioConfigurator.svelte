<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import {
		Configurator,
		generateSvelteCode,
		generateSvelteTagCode,
	} from "src/components/configurator";
	import { Select, Option } from "@smui/core/select";

	import { Checkbox } from "@smui/core/packages/checkbox";
	import { RadioGroup, Radio } from "@smui/core/radio";
	import MultipleItemControls from "src/components/configurator/common-options/MultipleItemControls.svelte";
	import DensityOption from "src/components/configurator/common-options/DensityOption.svelte";
	import Item from "@svelte-material-ui-test/core/packages/list/src/item/Item.svelte";

	let multipleItemsControls: MultipleItemControls;

	let value: string;

	let radios: RadioProps[] = [];
	let selectedRadio: RadioProps = {} as any;
	let selectedRadioId: string;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "FormField",
		props: [],
		content: radios
			?.map((item) =>
				getFormFieldCode(
					item.name,
					item.value,
					item.checked,
					item.ripple,
					item.density,
					item.expandedTouchTarget,
					item.disabled,
					item.readonly,
					item.required,
					item.label
				)
			)
			.join("\n"),
	});

	function getFormFieldCode(
		name: RadioProps["name"],
		value: RadioProps["value"],
		checkedValue: RadioProps["checked"],
		rippleValue: RadioProps["ripple"],
		densityValue: RadioProps["density"],
		expandedTouchTargetValue: RadioProps["expandedTouchTarget"],
		disabledValue: RadioProps["disabled"],
		readonlyValue: RadioProps["readonly"],
		requiredValue: RadioProps["required"],
		labelValue: RadioProps["label"]
	) {
		return generateSvelteTagCode({
			tag: "FormField",
			content: `
				${getRadioCode(
					name,
					value,
					checkedValue,
					rippleValue,
					densityValue,
					expandedTouchTargetValue,
					disabledValue,
					readonlyValue,
					requiredValue
				)}
				<Label>${labelValue}</Label>
			`,
			indentSize: 1,
		});
	}

	function getRadioCode(
		name: RadioProps["name"],
		value: RadioProps["value"],
		checkedValue: RadioProps["checked"],
		rippleValue: RadioProps["ripple"],
		densityValue: RadioProps["density"],
		expandedTouchTargetValue: RadioProps["expandedTouchTarget"],
		disabledValue: RadioProps["disabled"],
		readonlyValue: RadioProps["readonly"],
		requiredValue: RadioProps["required"]
	) {
		return generateSvelteTagCode({
			tag: "Radio",
			props: [
				`name="${name}"`,
				`value="${value}"`,
				[!rippleValue, "ripple={false}"],
				[!expandedTouchTargetValue, "expandedTouchTarget={false}"],
				[densityValue, `density={${densityValue}}`],
				[checkedValue, "checked"],
				[disabledValue, "disabled"],
				[readonlyValue, "readonly"],
				[requiredValue, "required"],
			],
			indentSize: 3,
		});
	}

	function handleRadioChange() {
		radios.forEach((radio) => {
			radio.checked = radio.value === value;
		});

		multipleItemsControls.updateItemsInstance();
	}

	function radioFactory(index: number) {
		const value = `radio:${index}`;
		return {
			id: value,
			name: `radio`,
			value,
			checked: false,
			ripple: true,
			expandedTouchTarget: true,
			density: 0,
			disabled: false,
			readonly: false,
			required: false,
			label: `Radio ${index}`,
		} as RadioProps;
	}

	interface RadioProps {
		id: string;
		name: string;
		value: string;
		checked: boolean;
		ripple: boolean;
		expandedTouchTarget: boolean;
		density: number;
		disabled: boolean;
		readonly: boolean;
		required: boolean;
		label: string;
	}
</script>

<svelte:options immutable={true} />

<Configurator {svelteCode} {scssCode}>
	<div slot="preview" style="flex-direction: column;">
		<RadioGroup bind:value on:change={handleRadioChange}>
			{#each radios as item, index (item.value)}
				<FormField>
					<Radio
						checked={item.checked}
						name={item.name}
						value={item.value}
						ripple={item.ripple}
						expandedTouchTarget={item.expandedTouchTarget}
						density={item.density}
						disabled={item.disabled}
						readonly={item.readonly}
						required={item.required} />
					<Label>{item.label}</Label>
				</FormField>
			{/each}
		</RadioGroup>
	</div>
	<div slot="values">value: {value ? `"${value}"` : value}</div>
	<div slot="optionsSidebar" class="options-sidebar">
		<div style="grid-column: span 2;">
			<FormField>
				<Select
					nullable={false}
					bind:value={selectedRadioId}
					on:change={multipleItemsControls.updateSelectedInstance}>
					<span slot="label">Selected radio</span>
					{#each radios as item (item.value)}
						<Option value={item.value}>{item.label}</Option>
					{/each}
				</Select>
			</FormField>
		</div>
		<div style="grid-column: span 2;">
			<DensityOption
				bind:density={selectedRadio.density}
				on:change={multipleItemsControls.updateItemsInstance}
				max={3} />
		</div>
		<div>
			<FormField>
				<Checkbox
					bind:checked={selectedRadio.checked}
					on:change={multipleItemsControls.updateItemsInstance} />
				<Label>Checked</Label>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox
					bind:checked={selectedRadio.ripple}
					on:change={multipleItemsControls.updateItemsInstance} />
				<Label>Ripple</Label>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox
					bind:checked={selectedRadio.expandedTouchTarget}
					on:change={multipleItemsControls.updateItemsInstance} />
				<Label>Expanded touch target</Label>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox
					bind:checked={selectedRadio.disabled}
					on:change={multipleItemsControls.updateItemsInstance} />
				<Label>Disabled</Label>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox
					bind:checked={selectedRadio.readonly}
					on:change={multipleItemsControls.updateItemsInstance} />
				<Label>Readonly</Label>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox
					bind:checked={selectedRadio.required}
					on:change={multipleItemsControls.updateItemsInstance} />
				<Label>Required</Label>
			</FormField>
		</div>
		<MultipleItemControls
			bind:this={multipleItemsControls}
			bind:items={radios}
			bind:selectedItem={selectedRadio}
			bind:selectedItemId={selectedRadioId}
			itemFactory={radioFactory} />
	</div>
</Configurator>
