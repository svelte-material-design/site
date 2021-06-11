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
	} from "../../_configurator/common";
	import type {
		DiscreteSliderConfigurations,
		DiscreteSliderRangeConfigurations,
	} from "./types";

	export let configurations: DiscreteSliderConfigurations;

	function handleChange() {
		configurations = { ...configurations };
	}

	async function toggleRangeSlider(toggle: boolean) {
		if (toggle) {
			configurations.rangeEnd = {
				min: 0,
				max: 20,
			} as DiscreteSliderRangeConfigurations;
		} else {
			configurations.rangeEnd = undefined;
		}

		handleChange();
	}
</script>

<Section>
	<CommonSliderOptions
		bind:disabled={configurations.disabled}
		bind:label={configurations.label}
		on:change={handleChange}
	/>
	<Slider bind:value={configurations.step} min={1} max={3} label="Step" />
	<Checkbox label="Tick marks" bind:checked={configurations.tickMarks} />
</Section>
<Typography>Range start</Typography>
<Section>
	<CommonRangeConfigurationsComponent
		bind:min={configurations.rangeStart.min}
		bind:max={configurations.rangeStart.max}
		on:input={handleChange}
		on:change={handleChange}
	/>
	<Checkbox
		label="Value indicator"
		bind:checked={configurations.rangeStart.valueIndicator}
		on:change={handleChange}
	/>
</Section>
<Checkbox
	label="Range slider"
	on:change={(e) => toggleRangeSlider(e.detail.checked)}
/>
{#if configurations.rangeEnd}
	<Typography>Range end</Typography>
	<Section>
		<CommonRangeConfigurationsComponent
			bind:min={configurations.rangeEnd.min}
			bind:max={configurations.rangeEnd.max}
			on:input={handleChange}
			on:change={handleChange}
		/>
		<Checkbox
			label="Value indicator"
			bind:checked={configurations.rangeEnd.valueIndicator}
			on:change={handleChange}
		/>
	</Section>
{/if}
