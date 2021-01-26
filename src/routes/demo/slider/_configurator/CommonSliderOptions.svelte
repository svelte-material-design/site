<svelte:options immutable={true} />

<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";
	import { tick } from "svelte";
	import { RangeConfigurations, RangeConfigurationsComponent } from ".";

	export let disabled: boolean;
	export let label: string;
	export let rangeStart: RangeConfigurations = {
		min: 0,
		max: 20,
	} as RangeConfigurations;
	export let rangeEnd: RangeConfigurations;

	let useLabel: boolean;

	$: label = useLabel ? "Label" : undefined;

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
	<Checkbox bind:checked={disabled} label="Disabled" />
	<Checkbox bind:checked={useLabel} label="Use Label" />
</Section>
<Typography>Range start</Typography>
<Section>
	<RangeConfigurationsComponent
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
		<RangeConfigurationsComponent
			bind:min={rangeEnd.min}
			bind:max={rangeEnd.max}
			on:input={handleRangeEndInput}
			on:change={handleRangeEndInput}
		/>
	</Section>
{/if}
