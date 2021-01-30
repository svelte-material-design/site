<svelte:options immutable={true} />

<script lang="ts">
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { FormField, Label } from "@svelte-material-design/core/form-field";
	import { Slider, Range, Thumb } from "@svelte-material-design/core/slider";
	import type { SliderConfigurations } from "./types";

	export let configurations: SliderConfigurations;

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
	<Slider disabled={configurations.disabled}>
		<Range
			bind:value={configurations.valueStart}
			min={configurations.rangeStart.min}
			max={configurations.rangeStart.max}
			on:input={handleChange}
			let:value
		>
			<Thumb />
		</Range>
		{#if configurations.rangeEnd}
			<Range
				bind:value={configurations.valueEnd}
				min={configurations.rangeEnd.min}
				max={configurations.rangeEnd.max}
				on:input={handleChange}
				let:value
			>
				<Thumb />
			</Range>
		{/if}
	</Slider>
</FormField>
