<svelte:options immutable={true} />

<script lang="ts">
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { FormField, Label } from "@svelte-material-design/core/form-field";
	import {
		DiscreteSlider,
		Range,
		Thumb,
	} from "@svelte-material-design/core/slider";
	import type { DiscreteSliderRangeConfigurations } from "./types";

	export let rangeStart: DiscreteSliderRangeConfigurations = {} as DiscreteSliderRangeConfigurations;
	export let rangeEnd: DiscreteSliderRangeConfigurations;
	export let disabled: boolean;
	export let label: string;
	export let valueStart: number;
	export let valueEnd: number;

	export let step: number;
	export let tickMarks: boolean;

	function handleRangeToggle(oldValue) {
		if (!oldValue) {
			valueStart = 0;
			valueEnd = 20;
		}
	}
</script>

<UseState value={rangeEnd} onUpdate={handleRangeToggle} />

<FormField vertical>
	{#if label}
		<Label>{label}</Label>
	{/if}
	<DiscreteSlider {disabled} {step} {tickMarks}>
		<Range
			bind:value={valueStart}
			min={rangeStart.min}
			max={rangeStart.max}
			let:value
			aria-valuetext={valueStart}
		>
			{#if rangeStart.valueIndicator}
				<Thumb>{value}kg</Thumb>
			{:else}
				<Thumb />
			{/if}
		</Range>
		{#if rangeEnd}
			<Range
				bind:value={valueEnd}
				min={rangeEnd.min}
				max={rangeEnd.max}
				let:value
			>
				{#if rangeEnd.valueIndicator}
					<Thumb>{value}kg</Thumb>
				{:else}
					<Thumb />
				{/if}
			</Range>
		{/if}
	</DiscreteSlider>
</FormField>
