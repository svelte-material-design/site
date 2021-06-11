<svelte:options immutable={true} />

<script lang="ts">
	import { IconTypeOption } from "src/components/configurator/smui-components/icons";
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";
	import type { FabConfigurations } from "./types";

	export let configurations: FabConfigurations;

	function handleChange() {
		configurations = { ...configurations };
	}

</script>

<Section>
	<Select
		bind:value={configurations.variant}
		label="Variant"
		options={[
			{ value: "regular", label: "Regular" },
			{ value: "extended", label: "Extended" },
			{ value: "mini", label: "Mini" },
		]}
		nullable={false}
		on:change={handleChange}
	/>
	<Select
		bind:value={configurations.color}
		label="Color"
		options={[
			{ value: "secondary", label: "Secondary" },
			{ value: "primary", label: "Primary" },
		]}
		nullable={false}
		on:change={handleChange}
	/>
	<IconTypeOption
		bind:value={configurations.iconType}
		label="Icon"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.show}
		label="Show"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.ripple}
		label="Ripple"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.accessibleTouch}
		label="Accessible touch"
		on:change={handleChange}
	/>
</Section>
