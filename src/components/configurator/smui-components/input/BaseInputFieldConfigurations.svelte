<svelte:options immutable={true} />

<script lang="ts">
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { BaseInputFieldConfigurations } from "./types";
	import { LABEL_TEXT } from "./constants";
	import { Section } from "../../molecules/configurations";
	import { onMount, tick } from "svelte";

	export let configurations: Partial<BaseInputFieldConfigurations>;

	onMount(async () => {
		await tick();
		updateInstance();
	});

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<Section>
	<Checkbox
		label="Ripple"
		bind:checked={configurations.ripple}
		on:change={updateInstance}
	/>
	<Checkbox
		label="Show label"
		checked={!!configurations.label}
		on:change={(e) => {
			configurations.label = e.detail.checked ? LABEL_TEXT : undefined;
			updateInstance();
		}}
	/>
	<Checkbox
		label="Disabled"
		bind:checked={configurations.disabled}
		on:change={updateInstance}
	/>
	<Checkbox
		label="Invalid"
		bind:checked={configurations.invalid}
		on:change={updateInstance}
	/>
	<Checkbox
		label="Helper text"
		checked={!!configurations.helperText}
		on:change={(e) => {
			configurations.helperText = e.detail.checked ? "Helper text" : undefined;
			if (!e.detail.checked) {
				configurations.helperTextAsValidationMsg = false;
			}
			updateInstance();
		}}
	/>
	<Checkbox
		label="Persistent helper text"
		disabled={!configurations.helperText}
		bind:checked={configurations.persistentHelperText}
		on:change={updateInstance}
	/>
</Section>
