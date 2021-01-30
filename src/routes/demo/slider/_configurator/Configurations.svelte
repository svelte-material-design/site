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
	import type { SliderConfigurations } from "./types";

	export let configurations: SliderConfigurations;

	function handleChange() {
		configurations = { ...configurations };
	}

	async function toggleRangeSlider(toggle: boolean) {
		if (toggle) {
			configurations.rangeEnd = { min: 0, max: 20 } as RangeConfigurations;
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
</Section>
<Typography>Range start</Typography>
<Section>
	<CommonRangeConfigurationsComponent
		bind:min={configurations.rangeStart.min}
		bind:max={configurations.rangeStart.max}
		on:input={handleChange}
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
	</Section>
{/if}
