<svelte:options immutable={true} />

<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";
	import {
		Checkbox,
		Slider,
	} from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";
	import {
		CommonRangeConfigurationsComponent,
		CommonSliderOptions,
	} from "../../_configurator";
	import type { DiscreteSliderRangeConfigurations } from "./types";

	export let rangeStart: DiscreteSliderRangeConfigurations = {
		min: 0,
		max: 20,
		valueIndicator: false,
	} as DiscreteSliderRangeConfigurations;
	export let rangeEnd: DiscreteSliderRangeConfigurations;

	export let tickMarks: boolean;
	export let step: number;
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
			rangeEnd = {
				min: 0,
				max: 20,
				valueIndicator: false,
			} as DiscreteSliderRangeConfigurations;
		} else {
			rangeEnd = undefined;
		}
	}
</script>

<Section>
	<CommonSliderOptions bind:disabled bind:label />
	<Slider bind:value={step} min={1} max={3} label="Step" />
	<Checkbox label="Tick marks" bind:checked={tickMarks} />
</Section>
<Typography>Range start</Typography>
<Section>
	<CommonRangeConfigurationsComponent
		bind:min={rangeStart.min}
		bind:max={rangeStart.max}
		on:input={handleRangeStartInput}
		on:change={handleRangeStartInput}
	/>
	<Checkbox
		label="Value indicator"
		bind:checked={rangeStart.valueIndicator}
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
		<Checkbox
			label="Value indicator"
			bind:checked={rangeEnd.valueIndicator}
			on:change={handleRangeEndInput}
		/>
	</Section>
{/if}
