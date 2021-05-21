<svelte:options immutable={true} />

<script lang="ts">
	import { Slider } from "src/components/configurator/atoms/configurations";
	import { createEventDispatcher } from "svelte";
	import { tick } from "svelte";

	export let value: number = 0;

	const dispatch = createEventDispatcher<{
		change: {
			value: number;
		};
	}>();

	let internalTimeout: number = 0;
	function timeoutValueText(value: number) {
		if (value === 0) {
			return "unlimited";
		} else {
			return "" + (value + 3) + "s";
		}
	}

	handleTimeoutChange(value);
	async function handleTimeoutChange(newValue: number) {
		if (newValue === 0) {
			value = null;
		} else {
			value = (newValue + 3) * 1000;
		}

		await tick();

		dispatch("change", {
			value,
		});
	}

</script>

<Slider
	bind:value={internalTimeout}
	max={7}
	step={1}
	customLabel={timeoutValueText}
	labelWidth="9ch"
	on:change={(e) => handleTimeoutChange(e.detail.value)}
	label="Timeout"
/>
