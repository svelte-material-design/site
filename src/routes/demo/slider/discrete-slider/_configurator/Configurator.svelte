<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { Values } from "src/components/configurator/atoms";
	import { template, script } from "./code";
	import Configurations from "./Configurations.svelte";
	import type {
		DiscreteSliderRangeConfigurations,
		DiscreteSliderConfigurations,
	} from "./types";
	import Preview from "./Preview.svelte";

	let rangeStart = { min: 0, max: 20 } as DiscreteSliderRangeConfigurations;
	let rangeEnd: DiscreteSliderRangeConfigurations;

	let tickMarks: boolean;
	let step: number;
	let disabled: boolean;
	let label: string;

	let valueStart: number;
	let valueEnd: number;

	let svelteScriptCode: string;
	let svelteCode: string;

	let configurations: DiscreteSliderConfigurations;
	$: configurations = {
		rangeEnd,
		rangeStart,
		disabled,
		label,
		step,
		tickMarks,
	};

	$: svelteScriptCode = script(configurations);
	$: svelteCode = template(configurations);
</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview">
		<Preview
			bind:valueStart
			bind:valueEnd
			{rangeStart}
			{rangeEnd}
			{disabled}
			{label}
			{tickMarks}
			{step}
		/>
	</div>
	<div slot="values">
		{#if rangeEnd}valueStart{:else}value{/if}: <Values value={valueStart} />
		{#if rangeEnd}
			valueEnd: <Values value={valueEnd} />
		{/if}
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations
			bind:rangeStart
			bind:rangeEnd
			bind:disabled
			bind:label
			bind:tickMarks
			bind:step
		/>
	</svelte-fragment>
</Configurator>
