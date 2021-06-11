<svelte:options immutable={true} />

<script lang="ts">
	import { FormField, Label } from "@svelte-material-design/core/form-field";
	import { Switch, Input } from "@svelte-material-design/core/switch";
	import type { SwitchConfigurations } from "../../types";

	export let configurations: SwitchConfigurations;

	function updateInstance() {
		configurations = { ...configurations };
	}

</script>

<FormField>
	<Switch
		bind:checked={configurations.checked}
		value={configurations.value}
		ripple={configurations.ripple}
		disabled={configurations.disabled}
		readonly={configurations.readonly}
		on:change={updateInstance}
	>
		<Input name="switch" />
	</Switch>
	<Label>{configurations.label}</Label>
</FormField>
