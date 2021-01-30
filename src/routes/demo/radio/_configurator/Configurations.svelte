<svelte:options immutable={true} />

<script lang="ts">
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";
	import type { RadioConfigurations } from "./types";

	export let configurations: RadioConfigurations;

	function handleChange() {
		configurations = { ...configurations };
	}
</script>

<Section>
	<Checkbox
		bind:checked={configurations.checked}
		label="Checked"
		on:change={handleChange}
		on:change
	/>
	<Checkbox
		bind:checked={configurations.ripple}
		label="Ripple"
		on:change={handleChange}
		on:change
	/>
	<Checkbox
		bind:checked={configurations.accessibleTouch}
		label="Accessible touch"
		on:change={handleChange}
		on:change
	/>
	<Checkbox
		bind:checked={configurations.disabled}
		label="Disabled"
		on:change={handleChange}
		on:change
	/>
	<Checkbox
		bind:checked={configurations.readonly}
		label="Readonly"
		on:change={handleChange}
		on:change
	/>
</Section>
