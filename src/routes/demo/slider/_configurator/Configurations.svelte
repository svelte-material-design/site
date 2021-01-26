<svelte:options immutable={true} />

<script lang="ts">
	import { CommonSliderOptions } from ".";
	import { RangeConfigurations } from "./types";

	export let rangeStart: RangeConfigurations;
	export let rangeEnd: RangeConfigurations;
	export let disabled: boolean;
	export let label: string;
</script>

<CommonSliderOptions bind:rangeStart bind:rangeEnd bind:disabled bind:label />
