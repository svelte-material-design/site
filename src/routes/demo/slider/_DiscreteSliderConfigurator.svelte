<script lang="ts">
	import { DiscreteSlider, SliderValueText } from "@smui/core/slider";
	import { FormField, Label } from "@smui/core/form-field";
	import {
		Configurator,
		generateSvelteCode,
	} from "src/components/configurator";
	import { Checkbox } from "@smui/core/checkbox";
	import { typography } from "@smui/core/typography";
	import LabelledSlider from "src/components/LabelledSlider.svelte";
	import LabelledRangeSlider from "src/components/LabelledRangeSlider.svelte";
	import CommonSliderOptions from "./_CommonSliderOptions.svelte";
	import BaseDiscreteSliderOptions from "./_BaseDiscreteSliderOptions.svelte";

	let value: number;
	let name = "discrete-slider";
	let useAriaLabel: boolean;
	let useTitle: boolean;
	let disabled: boolean;

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
	let max: number = 10;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "DiscreteSlider",
		props: [
			"bind:value",
			`min={${min}}`,
			`max={${max}}`,
			`step={${step}}`,
			`name="${name}"`,
			[tickMarks, "tickMarks"],
			[disabled, "disabled"],
			[hideValueIndicator, `hideValueIndicator`],
			[valueText, `{valueText}`],
			[title, `title="${title}"`],
			[ariaLabel, `ariaLabel="${ariaLabel}"`],
		],
		content: getContentCode(),
	});

	function getContentCode() {
		return ``;
	}
</script>

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

<svelte:options immutable={true} />

<Configurator {svelteCode} {scssCode}>
	<div slot="preview" class="preview-container">
		<div>
			<DiscreteSlider
				bind:value
				{min}
				{max}
				{step}
				{name}
				{tickMarks}
				{hideValueIndicator}
				{disabled}
				{ariaLabel}
				{valueText}
				{title} />
		</div>
	</div>
	<div slot="values">
		<div>
			value:
			{#if value != null && typeof value === 'string'}
				"{value}"
			{:else}{value}{/if}
		</div>
	</div>
	<div slot="optionsSidebar" class="options-sidebar">
		<div>
			<LabelledSlider bind:value={step} min={1} max={3} label="Step" />
		</div>
		<CommonSliderOptions
			bind:min
			bind:max
			bind:disabled
			bind:useTitle
			bind:useAriaLabel />
		<BaseDiscreteSliderOptions
			bind:hideValueIndicator
			bind:tickMarks
			bind:useValueText />
	</div>
</Configurator>
