<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { Values } from "src/components/configurator/atoms";
	import { template, script } from "./code";
	import Configurations from "./Configurations.svelte";
	import Preview from "./Preview.svelte";
	import type { DiscreteSliderConfigurations } from "./types";

	let configurations = {
		valueStart: 0,
		rangeStart: { min: 0, max: 20 },
	} as DiscreteSliderConfigurations;

	let svelteScriptCode: string;
	let svelteCode: string;

	$: svelteScriptCode = script(configurations);
	$: svelteCode = template(configurations);

</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview" class="preview">
		<Preview bind:configurations />
	</div>
	<div slot="values">
		{#if configurations.rangeEnd}valueStart{:else}value{/if}: <Values
			value={configurations.valueStart}
		/>
		{#if configurations.rangeEnd}
			valueEnd: <Values value={configurations.valueEnd} />
		{/if}
	</div>
	<svelte:fragment slot="optionsSidebar">
		<Configurations bind:configurations />
	</svelte:fragment>
</Configurator>

<style>
	.preview {
		padding: 1em;
	}

</style>
