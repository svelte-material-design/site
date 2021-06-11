<svelte:options immutable={true} />

<script lang="ts">
	import {
		Select,
		Checkbox,
	} from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();

	function handleChange() {
		$configurations$ = { ...$configurations$ };
	}

</script>

<Section>
	<Select
		bind:value={$configurations$.layout}
		label="Dialog layout"
		options={[
			{ value: "confirmation", label: "Confirmation" },
			{ value: "list", label: "List" },
		]}
		nullable={false}
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={$configurations$.autoStackButtons}
		label="Auto Stack Buttons"
		on:change={() => {
			$configurations$.stackedButtons = false;
			handleChange();
		}}
	/>
	<Checkbox
		bind:checked={$configurations$.stackedButtons}
		label="Stacked Buttons"
		on:change={() => {
			$configurations$.autoStackButtons = false;
			handleChange();
		}}
	/>
	<!-- <Checkbox
		bind:checked={$configurations$.fullscreen}
		label="Fullscreen"
		on:change={handleChange}
	/> -->
</Section>
