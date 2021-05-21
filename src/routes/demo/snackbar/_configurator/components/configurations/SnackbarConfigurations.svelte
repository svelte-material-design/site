<svelte:options immutable={true} />

<script lang="ts">
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { IconTypeOption } from "src/components/configurator/smui-components/icons";
	import { TimeoutMs } from ".";
	import { Section } from "src/components/configurator/molecules/configurations";
	import type { SnackbarConfigurations } from "../../types";

	export let configurations: SnackbarConfigurations;

	function handleChange() {
		if (!configurations.showActionBtn) {
			configurations.actionRipple = false;
		}

		if (!configurations.iconActionType) {
			configurations.iconActionRipple = false;
		}

		if (!configurations.showDismiss) {
			configurations.dismissRipple = false;
		}

		configurations = { ...configurations };
	}

</script>

<Section>
	<Checkbox
		bind:checked={configurations.open}
		label="Open"
		on:change={handleChange}
	/>
	<TimeoutMs bind:value={configurations.timeoutMs} on:change={handleChange} />
	<Checkbox
		bind:checked={configurations.stacked}
		label="Stacked"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.leading}
		label="Leading"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.closeOnEscape}
		label="Close on escape"
		on:change={handleChange}
	/>
</Section>
<Section>
	<Checkbox
		bind:checked={configurations.showActionBtn}
		label="Show action button"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.actionRipple}
		label="Action button ripple"
		disabled={!configurations.showActionBtn}
		on:change={handleChange}
	/>
	<IconTypeOption
		bind:value={configurations.iconActionType}
		allowEmpty
		label="Icon action"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.iconActionRipple}
		label="Icon action ripple"
		disabled={!configurations.iconActionType}
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.showDismiss}
		label="Show dismiss"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.dismissRipple}
		label="Dismiss ripple"
		disabled={!configurations.showDismiss}
		on:change={handleChange}
	/>
</Section>
