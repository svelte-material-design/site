<svelte:options immutable={true} />

<script lang="ts">
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();

	function handleChange() {
		$configurations$ = { ...$configurations$ };
	}

</script>

<Section>
	<!-- <Select
		bind:value={$configurations$.variant}
		label="Variant"
		options={[
			{ value: "text", label: "Text" },
			{ value: "raised", label: "Raised" },
			{ value: "unelevated", label: "Unelevated" },
			{ value: "outlined", label: "Outlined" },
		]}
		nullable={false}
		on:change={handleChange}
	/> -->
	<Checkbox
		bind:checked={$configurations$.open}
		label="Open"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={$configurations$.stackedOnMobile}
		label="Stacked on mobile"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={$configurations$.fixed}
		label="Fixed"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={$configurations$.centered}
		label="Centered"
		on:change={handleChange}
	/>
</Section>
