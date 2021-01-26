<svelte:options immutable={true} />

<script lang="ts">
	import { FormField, Label } from "@svelte-material-design/core/form-field";
	import { ContinuousSlider, Range } from "@svelte-material-design/core/slider";

	let value: number;

	let start: number;
	let end: number;
</script>

<FormField vertical>
	<Label>Slider</Label>
	<ContinuousSlider>
		<Range min={10} max={20} bind:value />
	</ContinuousSlider>
</FormField>

<input type="range" bind:value placeholder="value" min={0} />
<input type="number" bind:value placeholder="value" min={0} />

<FormField vertical>
	<Label>Slider Range</Label>
	<ContinuousSlider>
		<Range min={0} max={20} bind:value={start} />
		<Range min={0} max={20} bind:value={end} />
	</ContinuousSlider>
</FormField>

{value}

<input type="number" bind:value={start} placeholder="start" />
<input type="number" bind:value={end} placeholder="end" />
