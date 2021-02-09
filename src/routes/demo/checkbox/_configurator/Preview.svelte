<svelte:options immutable={true} />

<script lang="ts">
	import { FormField, Label } from "@svelte-material-design/core/form-field";
	import { Checkbox } from "@svelte-material-design/core/checkbox";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();

	function updateInstance() {
		$configurations$ = { ...$configurations$ };
	}
</script>

<FormField>
	<Checkbox
		bind:checked={$configurations$.checked}
		name="radio"
		value={$configurations$.value}
		allowIndeterminated={$configurations$.allowIndeterminated}
		ripple={$configurations$.ripple}
		accessibleTouch={$configurations$.accessibleTouch}
		disabled={$configurations$.disabled}
		readonly={$configurations$.readonly}
		on:change={updateInstance}
	/>
	<Label>{$configurations$.label}</Label>
</FormField>
