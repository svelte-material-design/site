<svelte:options immutable={true} />

<script lang="ts">
	import { Slider } from "src/components/configurator/atoms/configurations";
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { onMount } from "svelte";
	import type { CommonListConfigurations } from "./types";

	export let configurations: Partial<CommonListConfigurations>;

	onMount(() => {
		handleSeparatorUpdate();
	});

	function handleSeparatorUpdate() {
		if (!configurations.separator) {
			configurations.separatorInsetPadding = false;
			configurations.separatorInsetLeading = false;
			configurations.separatorInsetTrailing = false;
		}
	}

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<Slider
	bind:value={configurations.itemsRows}
	min={1}
	max={3}
	step={1}
	label="Items rows"
	on:input={updateInstance}
/>
<Checkbox
	label="Dense"
	bind:checked={configurations.dense}
	on:change={updateInstance}
/>
<Checkbox
	label="Separator"
	bind:checked={configurations.separator}
	on:change={handleSeparatorUpdate}
	on:change={updateInstance}
/>
<Checkbox
	label="Separator inset leading"
	disabled={!configurations.separator}
	bind:checked={configurations.separatorInsetLeading}
	on:change={updateInstance}
/>
<Checkbox
	label="Separator inset trailing"
	disabled={!configurations.separator}
	bind:checked={configurations.separatorInsetTrailing}
	on:change={updateInstance}
/>
<Checkbox
	label="Separator inset padding"
	bind:checked={configurations.separatorInsetPadding}
	disabled={!configurations.separator ||
		!configurations.separatorInsetLeading ||
		!configurations.separatorInsetTrailing}
	on:change={updateInstance}
/>
