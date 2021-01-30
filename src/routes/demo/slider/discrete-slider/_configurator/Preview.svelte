<svelte:options immutable={true} />

<script lang="ts">
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { FormField, Label } from "@svelte-material-design/core/form-field";
	import {
		DiscreteSlider,
		Range,
		Thumb,
	} from "@svelte-material-design/core/slider";
	import type { DiscreteSliderConfigurations } from "./types";

	export let configurations: DiscreteSliderConfigurations;

	function handleRangeToggle(oldValue) {
		if (!oldValue) {
			configurations.valueStart = 0;
			configurations.valueEnd = 20;
		}

		handleChange();
	}

	function handleChange() {
		configurations = { ...configurations };
	}
</script>

<UseState value={configurations.rangeEnd} onUpdate={handleRangeToggle} />

<FormField vertical>
	{#if configurations.label}
		<Label>{configurations.label}</Label>
	{/if}
	<DiscreteSlider
		disabled={configurations.disabled}
		step={configurations.step}
		tickMarks={configurations.tickMarks}
	>
		<Range
			bind:value={configurations.valueStart}
			min={configurations.rangeStart.min}
			max={configurations.rangeStart.max}
			on:input={handleChange}
			let:value
		>
			{#if configurations.rangeStart.valueIndicator}
				<Thumb>{value}kg</Thumb>
			{:else}
				<Thumb />
			{/if}
		</Range>
		{#if configurations.rangeEnd}
			<Range
				bind:value={configurations.valueEnd}
				min={configurations.rangeEnd.min}
				max={configurations.rangeEnd.max}
				let:value
			>
				{#if configurations.rangeEnd.valueIndicator}
					<Thumb>{value}kg</Thumb>
				{:else}
					<Thumb />
				{/if}
			</Range>
		{/if}
	</DiscreteSlider>
</FormField>
