<svelte:options immutable={true} />

<script lang="ts">
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import { IconTypeOption } from "src/components/configurator/smui-components/icons";
	import type { TabConfigurations } from "../../types";

	export let configurations: TabConfigurations;

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<Checkbox
	bind:checked={configurations.active}
	label="Active"
	on:change={updateInstance}
/>
<Checkbox
	bind:checked={configurations.ripple}
	label="Ripple"
	on:change={updateInstance}
/>
<Checkbox
	bind:checked={configurations.stacked}
	label="Stacked"
	on:change={updateInstance}
/>
<Checkbox
	bind:checked={configurations.useMinWidth}
	label="Use min width"
	on:change={updateInstance}
/>
<Select
	bind:value={configurations.tabIndicatorPosition}
	label="Tab indicator position"
	nullable={false}
	options={[
		{ label: "Under label", value: "label" },
		{ label: "Under tab", value: "tab" },
	]}
	on:change={updateInstance}
/>
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
