<svelte:options immutable={true} />

<script lang="ts">
	import {
		Select,
		Checkbox,
		Slider,
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
		bind:value={$configurations$.variant}
		nullable={false}
		label="Variant"
		options={[
			{
				label: "Standard",
				value: "standard",
			},
			{
				label: "Masonry",
				value: "masonry",
			},
		]}
		on:change={handleChange}
	/>
	<Select
		bind:value={$configurations$.aspect}
		nullable={false}
		label="Aspect"
		disabled={!$configurations$.aspectContainer}
		options={[
			{
				label: "1:1",
				value: "1:1",
			},
			{
				label: "16:9",
				value: "16:9",
			},
			{
				label: "4:3",
				value: "4:3",
			},
		]}
		on:change={handleChange}
	/>
	<Checkbox
		label="Show Label"
		bind:checked={$configurations$.label}
		on:change={handleChange}
	/>
	<Checkbox
		label="Text protection"
		bind:checked={$configurations$.textProtection}
		disabled={!$configurations$.label}
		on:change={handleChange}
	/>
	<Checkbox
		label="Aspect container"
		bind:checked={$configurations$.aspectContainer}
		disabled={$configurations$.variant === "masonry"}
		on:change={handleChange}
	/>
</Section>
<Section>
	<Slider
		label="Columns"
		bind:value={$configurations$.columns}
		max={4}
		min={1}
		on:input={handleChange}
	/>
</Section>
