<script lang="ts">
	import { ContinuousSlider, SliderValue } from "@smui/core/slider";
	import { FormField } from "@smui/core/form-field";
	import {
		Configurator,
		generateSvelteCode,
	} from "src/components/configurator";
	import { Checkbox } from "@smui/core/packages/checkbox";

	let value: SliderValue;
	let name = "discrete-slider";

	let useAriaLabel: boolean;
	let useTitle: boolean;
	let disabled: boolean;
	let useRangeValue: boolean;

	let ariaLabel: string;
	$: ariaLabel = useAriaLabel ? "Label" : undefined;

	let title: string;
	$: title = useTitle ? "Title" : undefined;

	$: value = useRangeValue ? [0, 10] : 0;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "Continuous",
		props: [
			"bind:value",
			"min={0}",
			"max={10}",
			`name="${name}"`,
			[disabled, "disabled"],
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
		padding: 1em;
		align-items: start !important;
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
			<ContinuousSlider
				bind:value
				min={0}
				max={10}
				{name}
				{disabled}
				{ariaLabel}
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
			<FormField>
				<Checkbox bind:checked={disabled} />
				<span slot="label">Disabled</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={useRangeValue} />
				<span slot="label">Use range value</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={useTitle} />
				<span slot="label">Title</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={useAriaLabel} />
				<span slot="label">Use Aria Label</span>
			</FormField>
		</div>
	</div>
</Configurator>
