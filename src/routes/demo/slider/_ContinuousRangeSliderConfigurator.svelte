<script lang="ts">
	import { ContinuousRangeSlider } from "@smui/core/slider";
	import { FormField, Label } from "@smui/core/form-field";
	import {
		Configurator,
		generateSvelteCode,
		generateSvelteTagCode,
	} from "src/components/configurator";
	import LabelledSlider from "src/components/LabelledSlider.svelte";
	import CommonSliderOptions from "./_CommonSliderOptions.svelte";

	let value: [number, number];
	let name = "discrete-range-slider";
	let useAriaLabel: boolean;
	let useTitle: boolean;
	let disabled: boolean;
	let useLabel: boolean = true;
	let gap: number = 1;

	let ariaLabel: string;
	$: ariaLabel = useAriaLabel ? "Label" : undefined;

	let title: string;
	$: title = useTitle ? "Title" : undefined;

	let min: number = 0;
	let max: number = 20;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "FormField",
		props: ["vertical"],
		content: `
			${useLabel ? `<Label>Label</Label>` : ""}
			${getSliderCode(min, max, gap, name, disabled, title, ariaLabel)}
		`,
	});

	function getSliderCode(
		minValue: typeof min,
		maxValue: typeof max,
		gapValue: typeof gap,
		nameValue: typeof name,
		disabledValue: typeof disabled,
		titleValue: typeof title,
		ariaLabelValue: typeof ariaLabel
	) {
		return generateSvelteTagCode({
			tag: "ContinuousRangeSlider",
			props: [
				"bind:value",
				`min={${minValue}}`,
				`max={${maxValue}}`,
				`gap={${gapValue}}`,
				`name="${nameValue}"`,
				[disabledValue, "disabled"],
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
			<FormField vertical>
				{#if useLabel}
					<Label>Label</Label>
				{/if}
				<ContinuousRangeSlider
					bind:value
					{min}
					{max}
					{gap}
					{name}
					{disabled}
					{ariaLabel}
					{title} />
			</FormField>
		</div>
	</div>
	<div slot="values">
		<div>
			value:
			{#if value != null && typeof value === 'string'}
				"{value}"
			{:else}[{value}]{/if}
		</div>
	</div>
	<div slot="optionsSidebar" class="options-sidebar">
		<div>
			<LabelledSlider bind:value={gap} min={0} max={3} label="Gap" />
		</div>
		<CommonSliderOptions
			bind:min
			bind:max
			bind:disabled
			bind:useTitle
			bind:useAriaLabel
			bind:useLabel />
	</div>
</Configurator>
