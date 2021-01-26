<svelte:options immutable={true} />

<script lang="ts">
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { FormField, Label } from "@svelte-material-design/core/form-field";
	import {
		ContinuousSlider,
		Range,
		Thumb,
	} from "@svelte-material-design/core/slider";
	import type { RangeConfigurations } from "./types";

	export let rangeStart: RangeConfigurations = {} as RangeConfigurations;
	export let rangeEnd: RangeConfigurations;
	export let disabled: boolean;
	export let label: string;
	export let valueStart: number;
	export let valueEnd: number;

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
	<ContinuousSlider {disabled}>
		<Range
			bind:value={valueStart}
			min={rangeStart.min}
			max={rangeStart.max}
			let:value
		>
			<Thumb>{value}</Thumb>
		</Range>
		{#if rangeEnd}
			<Range
				bind:value={valueEnd}
				min={rangeEnd.min}
				max={rangeEnd.max}
				let:value
			>
				<Thumb>{value}</Thumb>
			</Range>
		{/if}
	</ContinuousSlider>
</FormField>
