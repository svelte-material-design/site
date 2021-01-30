<svelte:options immutable={true} />

<script lang="ts">
	import { FormField, Label } from "@svelte-material-design/core/form-field";
	import { Checkbox } from "@svelte-material-design/core/checkbox";
	import type { CheckboxConfigurations } from "./types";

	export let configurations = {} as CheckboxConfigurations;

	function handleChange() {
		configurations = { ...configurations };
	}
</script>

<FormField>
	<Checkbox
		bind:checked={configurations.checked}
		name="radio"
		value={configurations.value}
		allowIndeterminated={configurations.allowIndeterminated}
		ripple={configurations.ripple}
		accessibleTouch={configurations.accessibleTouch}
		disabled={configurations.disabled}
		readonly={configurations.readonly}
		on:change={handleChange}
		on:change
	/>
	<Label>{configurations.label}</Label>
</FormField>
