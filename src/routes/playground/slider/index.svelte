<svelte:options immutable={true} />

<script lang="ts">
	import { FormField, Label } from "@svelte-material-design/core/form-field";
	import { Slider, Range } from "@svelte-material-design/core/slider";

	let value: number;

	let start: number;
	let end: number;
</script>

<FormField vertical>
	<Label>Slider</Label>
	<Slider>
		<Range min={10} max={20} bind:value />
	</Slider>
</FormField>

<input type="range" bind:value placeholder="value" min={0} />
<input type="number" bind:value placeholder="value" min={0} />

<FormField vertical>
	<Label>Slider Range</Label>
	<Slider>
		<Range min={0} max={20} bind:value={start} />
		<Range min={0} max={20} bind:value={end} />
	</Slider>
</FormField>

{value}

<input type="number" bind:value={start} placeholder="start" />
<input type="number" bind:value={end} placeholder="end" />
