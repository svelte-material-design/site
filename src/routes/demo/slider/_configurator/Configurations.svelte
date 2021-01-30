<svelte:options immutable={true} />

<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";
	import {
		CommonRangeConfigurationsComponent,
		CommonSliderOptions,
	} from "./common";
	import type { RangeConfigurations } from ".";

	export let rangeStart: RangeConfigurations = {
		min: 0,
		max: 20,
	} as RangeConfigurations;
	export let rangeEnd: RangeConfigurations;

	export let disabled: boolean;
	export let label: string;

	function handleRangeStartInput() {
		rangeStart = { ...rangeStart };
	}

	function handleRangeEndInput() {
		rangeEnd = { ...rangeEnd };
	}

	async function toggleRangeSlider(toggle: boolean) {
		if (toggle) {
			rangeEnd = { min: 0, max: 20 } as RangeConfigurations;
		} else {
			rangeEnd = undefined;
		}
	}
</script>

<Section>
	<CommonSliderOptions bind:disabled bind:label />
</Section>
<Typography>Range start</Typography>
<Section>
	<CommonRangeConfigurationsComponent
		bind:min={rangeStart.min}
		bind:max={rangeStart.max}
		on:input={handleRangeStartInput}
		on:change={handleRangeStartInput}
	/>
</Section>
<Checkbox
	label="Range slider"
	on:change={(e) => toggleRangeSlider(e.detail.checked)}
/>
{#if rangeEnd}
	<Typography>Range end</Typography>
	<Section>
		<CommonRangeConfigurationsComponent
			bind:min={rangeEnd.min}
			bind:max={rangeEnd.max}
			on:input={handleRangeEndInput}
			on:change={handleRangeEndInput}
		/>
	</Section>
{/if}
