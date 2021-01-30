<svelte:options immutable={true} />

<script lang="ts">
	import { IconTypeOption } from "src/components/configurator/smui-components/icons";
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";
	import type { IconButtonConfigurations } from "./types";

	export let configurations: IconButtonConfigurations;

	function handleChange() {
		configurations = { ...configurations };
	}
</script>

<Section>
	<Select
		bind:value={configurations.color}
		label="Color"
		options={[
			{ value: "inherit", label: "Inherit" },
			{ value: "primary", label: "Primary" },
			{ value: "secondary", label: "Secondary" },
		]}
		nullable={false}
		on:change={handleChange}
	/>
	<IconTypeOption
		bind:value={configurations.iconType}
		label="Icon type"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.disabled}
		label="Disabled"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.ripple}
		label="Ripple"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.link}
		label="Link"
		on:change={handleChange}
	/>
</Section>
