<script lang="ts">
	import { Slider } from "src/components/configurator/common-options/base";

	export let value: number = 0;

	let internalTimeout: number = 0;
	function timeoutValueText(value: number) {
		if (value === 0) {
			return "unlimited";
		} else {
			return "" + (value + 3) + "s";
		}
	}

	handleTimeoutChange(value);
	function handleTimeoutChange(newValue: number) {
		if (newValue === 0) {
			value = null;
		} else {
			value = (newValue + 3) * 1000;
		}
	}
</script>

<Slider
	bind:value={internalTimeout}
	max={7}
	step={1}
	valueText={timeoutValueText}
	on:change={(e) => handleTimeoutChange(e.detail.value)}
	label="Timeout" />
