<svelte:options immutable={true} />

<script lang="ts">
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";
	import { onMount } from "svelte";
	import type { RadioConfigurations } from "../types";

	export let configurations: RadioConfigurations;

	onMount(() => {
		updateInstance();
	});

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<Section>
	<Checkbox
		bind:checked={configurations.checked}
		label="Checked"
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={configurations.ripple}
		label="Ripple"
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={configurations.accessibleTouch}
		label="Accessible touch"
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
