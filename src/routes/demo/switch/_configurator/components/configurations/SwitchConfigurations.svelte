<svelte:options immutable={true} />

<script lang="ts">
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";
	import type { SwitchConfigurations } from "../../types";

	export let configurations: SwitchConfigurations;

	function updateInstance() {
		configurations = { ...configurations };
	}

</script>

<Section>
	<Checkbox
		bind:checked={configurations.checked}
		label="Active"
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={configurations.ripple}
		label="Ripple"
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={configurations.disabled}
		label="Disabled"
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={configurations.readonly}
		label="Readonly"
		on:change={updateInstance}
	/>
</Section>
