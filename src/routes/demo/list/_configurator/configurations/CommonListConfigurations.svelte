<svelte:options immutable={true} />

<script lang="ts">
	import { Slider } from "src/components/configurator/atoms/configurations";
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import type { CommonListConfigurations } from "../types";
	import { createEventDispatcher, tick } from "svelte";
	import { UseState } from "@raythurnevoid/svelte-hooks";
	export let configurations: CommonListConfigurations;

	const dispatch = createEventDispatcher<{
		change: void;
	}>();

	handleSeparatorUpdate(undefined);
	function handleSeparatorUpdate(oldValue: boolean) {
		if (!configurations.separator && configurations.separator !== oldValue) {
			configurations.separatorInsetPadding = false;
			configurations.separatorInsetLeading = false;
			configurations.separatorInsetTrailing = false;
			handleChange();
		}
	}

	async function handleOrientationChange(checked: boolean) {
		configurations.orientation = checked ? "horizontal" : undefined;
	}

	async function handleChange() {
		await tick();

		dispatch("change");
	}
</script>

<UseState value={configurations.separator} onUpdate={handleSeparatorUpdate} />

<Select
	bind:value={configurations.type}
	label="Type"
	nullable={false}
	options={[
		{ label: "Textual list", value: "textual" },
		{ label: "Image list", value: "image" },
		{ label: "Icons list", value: "icon" },
		{ label: "Avatar list", value: "avatar" },
		{ label: "Thumbnail list", value: "thumbnail" },
		{ label: "Video list", value: "video" },
	]}
	on:change={handleChange}
	on:change
/>
<Slider
	bind:value={configurations.itemsRows}
	min={1}
	max={3}
	step={1}
	label="Items rows"
	on:input={handleChange}
	on:input
	on:change
/>
<Checkbox
	label="Wrap focus"
	bind:checked={configurations.wrapFocus}
	on:change={handleChange}
	on:change
/>
<Checkbox
	label="Dense"
	bind:checked={configurations.dense}
	on:change={handleChange}
	on:change
/>
<Checkbox
	label="Horizontal"
	on:change={(event) => handleOrientationChange(event.detail.checked)}
	on:change
/>
<Checkbox
	label="Separator"
	bind:checked={configurations.separator}
	on:change={handleChange}
	on:change
/>
<Checkbox
	label="Separator inset leading"
	disabled={!configurations.separator}
	bind:checked={configurations.separatorInsetLeading}
	on:change={handleChange}
	on:change
/>
<Checkbox
	label="Separator inset trailing"
	disabled={!configurations.separator}
	bind:checked={configurations.separatorInsetTrailing}
	on:change={handleChange}
	on:change
/>
<Checkbox
	label="Separator inset padding"
	bind:checked={configurations.separatorInsetPadding}
	disabled={!configurations.separator ||
		!configurations.separatorInsetLeading ||
		!configurations.separatorInsetTrailing}
	on:change={handleChange}
	on:change
/>
