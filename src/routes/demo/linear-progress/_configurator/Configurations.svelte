<svelte:options immutable={true} />

<script lang="ts">
	import { Slider } from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import { CommonProgressOptions } from "./components";

	const { configurations$ } = getConfiguratorContext();

	function handleProgressChange(value: number) {
		$configurations$.progress = value / 10;
		updateInstance();
	}

	function handleBufferChange(value: number) {
		$configurations$.buffer = value / 10;
		updateInstance();
	}

	function updateInstance() {
		$configurations$ = { ...$configurations$ };
	}
</script>

<Section>
	<CommonProgressOptions
		bind:configurations={$configurations$}
		on:change={updateInstance}
	/>
	<Slider
		label="Progress"
		max={10}
		value={$configurations$.progress * 10}
		customLabel={(v) => "" + v / 10}
		on:input={(event) => handleProgressChange(event.detail.value)}
	/>
	<Slider
		label="Buffer"
		max={10}
		value={$configurations$.buffer * 10}
		customLabel={(v) => "" + v / 10}
		on:input={(event) => handleBufferChange(event.detail.value)}
	/>
</Section>
