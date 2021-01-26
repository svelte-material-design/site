<svelte:options immutable={true} />

<script lang="ts">
	import { SliderValueText, DiscreteSlider } from "@smui/core/slider";
	import { FormField, Label } from "@smui/core/form-field";
	import {
		Configurator,
		generateSvelteCode,
		generateSvelteTagCode,
	} from "src/components/configurator";
	import { Checkbox } from "@smui/core/checkbox";
	import LabelledSlider from "src/components/LabelledSlider.svelte";
	import LabelledRangeSlider from "src/components/LabelledRangeSlider.svelte";
	import CommonSliderOptions from "./_CommonSliderOptions.svelte";
	import BaseDiscreteSliderOptions from "./_BaseDiscreteSliderOptions.svelte";

	let value: [number, number];
	let name = "discrete-range-slider";
	let useAriaLabel: boolean;
	let useTitle: boolean;
	let disabled: boolean;
	let useLabel: boolean = true;
	let gap: number = 1;

	let tickMarks: boolean;
	let step: number;
	let hideValueIndicator: boolean;
	let useValueText: boolean;

	let ariaLabel: string;
	$: ariaLabel = useAriaLabel ? "Label" : undefined;

	let title: string;
	$: title = useTitle ? "Title" : undefined;

	let valueText: SliderValueText;
	$: if (hideValueIndicator) useValueText = undefined;
	$: valueText = useValueText ? (v: number) => `Value ${v}` : undefined;

	let min: number = 0;
	let max: number = 20;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "FormField",
		props: ["vertical"],
		content: `
			${useLabel ? `<Label>Label</Label>` : ""}
			${getSliderCode(
				min,
				max,
				gap,
				step,
				name,
				tickMarks,
				disabled,
				hideValueIndicator,
				valueText,
				title,
				ariaLabel
			)}
		`,
	});

	function getSliderCode(
		minValue: typeof min,
		maxValue: typeof max,
		gapValue: typeof gap,
		stepValue: typeof step,
		nameValue: typeof name,
		tickMarksValue: typeof tickMarks,
		disabledValue: typeof disabled,
		hideValueIndicatorValue: typeof hideValueIndicator,
		valueTextValue: typeof valueText,
		titleValue: typeof title,
		ariaLabelValue: typeof ariaLabel
	) {
		return generateSvelteTagCode({
			tag: "DiscreteSlider",
			props: [
				"bind:value",
				`min={${minValue}}`,
				`max={${maxValue}}`,
				`gap={${gapValue}}`,
				`step={${stepValue}}`,
				`name="${nameValue}"`,
				[tickMarksValue, "tickMarks"],
				[disabledValue, "disabled"],
				[hideValueIndicatorValue, `hideValueIndicator`],
				[valueTextValue, `{valueText}`],
				[titleValue, `title="${titleValue}"`],
				[ariaLabelValue, `ariaLabel="${ariaLabelValue}"`],
			],
			content: getContentCode(),
			indentFirstLine: false,
			indentSize: 3,
		});
	}

	function getContentCode() {
		return ``;
	}
</script>

<Configurator {svelteCode} {scssCode}>
	<div slot="preview" class="preview-container">
		<div>
			<FormField vertical>
				{#if useLabel}
					<Label>Label</Label>
				{/if}
				<DiscreteSlider
					bind:value
					{min}
					{max}
					{gap}
					{step}
					{name}
					{tickMarks}
					{hideValueIndicator}
					{disabled}
					{ariaLabel}
					{valueText}
					{title}
				/>
			</FormField>
		</div>
	</div>
	<div slot="values">
		<div>
			value:
			{#if value != null && typeof value === "string"}
				"{value}"
			{:else}[{value}]{/if}
		</div>
	</div>
	<div slot="optionsSidebar" class="options-sidebar">
		<div>
			<LabelledSlider bind:value={gap} min={0} max={3} label="Gap" />
		</div>
		<div>
			<LabelledSlider bind:value={step} min={1} max={3} label="Step" />
		</div>
		<CommonSliderOptions
			bind:min
			bind:max
			bind:disabled
			bind:useTitle
			bind:useAriaLabel
			bind:useLabel
		/>
		<BaseDiscreteSliderOptions
			bind:hideValueIndicator
			bind:tickMarks
			bind:useValueText
		/>
	</div>
</Configurator>

<style lang="scss">
	.preview-container {
		height: 10em;
	}

	.options-sidebar {
		:global(.mdc-select) {
			width: 100%;
		}
	}
</style>
