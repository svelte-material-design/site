<svelte:options immutable={true} />

<script lang="ts">
	import { FormField, Label } from "@svelte-material-design/core/form-field";
	import { Radio } from "@svelte-material-design/core/radio";
	import type { RadioConfigurations } from "./types";

	export let configurations = {} as RadioConfigurations;

	function handleChange() {
		configurations = { ...configurations };
	}
</script>

<FormField>
	<Radio
		bind:checked={configurations.checked}
		name="radio"
		value={configurations.value}
		ripple={configurations.ripple}
		accessibleTouch={configurations.accessibleTouch}
		disabled={configurations.disabled}
		readonly={configurations.readonly}
		on:change={handleChange}
		on:change
	/>
	<Label>{configurations.label}</Label>
</FormField>
