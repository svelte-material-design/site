<svelte:options immutable={true} />

<script lang="ts">
	import LabelledRangeSlider from "src/components/LabelledRangeSlider.svelte";

	export let min: number = 0;
	export let max: number = 20;
</script>

<div>
	<LabelledRangeSlider
		bind:start={min}
		bind:end={max}
		min={0}
		max={20}
		label="min/max"
		on:change
		on:input
	/>
</div>
