<svelte:options immutable={true} />

<script lang="ts">
	import { FormField, Label } from "@svelte-material-design/core/form-field";
	import { DiscreteSlider, Range } from "@svelte-material-design/core/slider";

	let value: number;

	let start: number;
	let end: number;
</script>

<FormField vertical>
	<Label>Slider</Label>
	<DiscreteSlider tickMarks step={3}>
		<Range min={10} max={20} bind:value let:value>^{value}</Range>
	</DiscreteSlider>
</FormField>

<input type="range" bind:value placeholder="value" min={0} />
<input type="number" bind:value placeholder="value" min={0} />

<FormField vertical>
	<Label>Slider Range</Label>
	<DiscreteSlider tickMarks step={3} gap={5}>
		<Range min={0} max={20} bind:value={start} />
		<Range min={0} max={20} bind:value={end} />
	</DiscreteSlider>
</FormField>

{value}

<input type="number" bind:value={start} placeholder="start" />
<input type="number" bind:value={end} placeholder="end" />
