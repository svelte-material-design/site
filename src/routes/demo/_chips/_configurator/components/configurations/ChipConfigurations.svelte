<svelte:options immutable={true} />

<script lang="ts">
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { IconTypeOption } from "src/components/configurator/smui-components/icons";
	import type { ChipConfigurations, ChipSetConfigurations } from "../../types";

	export let configurations: ChipConfigurations;
	export let chipSetConfigurations: ChipSetConfigurations;

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<IconTypeOption
	bind:value={configurations.leadingIcon}
	label="Leading icon"
	allowEmpty
	on:change={updateInstance}
/>
<IconTypeOption
	bind:value={configurations.trailingIcon}
	label="Trailing icon"
	allowEmpty
	on:change={updateInstance}
/>
<Checkbox
	bind:checked={configurations.hideLeadingIconOnSelect}
	label="Hide leading icon on select"
	disabled={!!configurations.leadingIcon}
	on:change={updateInstance}
/>
<Checkbox
	bind:checked={configurations.selected}
	label="Selected"
	disabled={!!chipSetConfigurations.variant}
/>
<Checkbox
	bind:checked={configurations.ripple}
	label="Ripple"
	on:change={updateInstance}
/>
<Checkbox
	bind:checked={configurations.useCheckmark}
	label="Use Checkmark"
	on:change={updateInstance}
/>
<Checkbox
	bind:checked={configurations.action}
	label="Action"
	on:change={updateInstance}
/>
<Checkbox
	bind:checked={configurations.accessibleTouch}
	label="Accessible Touch"
	on:change={updateInstance}
/>
<Checkbox
	bind:checked={configurations.trailingIconAction}
	label="Trailing icon action"
	disabled={!!configurations.trailingIcon}
	on:change={updateInstance}
/>
