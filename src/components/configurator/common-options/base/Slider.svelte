<script lang="ts">
	import { FormField, Label } from "@svelte-material-design/core/form-field";
	import { typography } from "@svelte-material-design/core/typography";
	import {
		DiscreteSlider,
		SliderChangeEvent,
	} from "@svelte-material-design/core/slider";
	import { createEventDispatcher } from "svelte";

	export let value: number;
	export let precision: number = undefined;
	export let min: number = undefined;
	export let max: number;
	export let step: number;
	export let label: string;
	export let showDefault: boolean = false;
	export let disabled: boolean = false;
	export let valueText: (value: number) => string = undefined;

	const dispatch = createEventDispatcher<{
		change: {
			value: number;
		};
	}>();

	function handleValue(event: SliderChangeEvent) {
		value = round(event.value);
		dispatch("change", { value });
	}

	function round(v: number) {
		return Number(Number(v).toFixed(precision));
	}

	function _valueText(v: number): string {
		return `${valueText ? valueText(v) : v}`;
	}
</script>

<div class="slider-options">
	<FormField vertical>
		<Label class="label">
			<div use:typography={"body2"}>
				<span>{label}</span>
				<span
					>{value
						? `${_valueText(value)}`
						: showDefault
						? "default"
						: `${_valueText(value)}`}</span
				>
			</div>
		</Label>
		<DiscreteSlider
			{value}
			{min}
			{max}
			{step}
			{disabled}
			on:change={(e) => handleValue(e.detail)}
			valueText={(v) => _valueText(round(v))}
		/>
	</FormField>
</div>

<style lang="scss">
	.slider-options :global(.label) {
		width: 100%;
		padding: 0 24px;
		box-sizing: border-box;

		> :global(div) {
			display: flex;
			justify-content: space-between;
		}
	}
</style>
