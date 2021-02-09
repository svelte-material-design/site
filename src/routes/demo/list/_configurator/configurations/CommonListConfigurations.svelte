<svelte:options immutable={true} />

<script lang="ts">
	import { Slider } from "src/components/configurator/atoms/configurations";
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import { onMount } from "svelte";
	import { BaseListConfigurations } from "../types";

	export let configurations: BaseListConfigurations;

	let horizontal: boolean;

	onMount(() => {
		handleSeparatorUpdate();
		handleOrientationChange();
		updateInstance();
	});

	function handleSeparatorUpdate() {
		if (!configurations.separator) {
			configurations.separatorInsetPadding = false;
			configurations.separatorInsetLeading = false;
			configurations.separatorInsetTrailing = false;
		}
	}

	async function handleOrientationChange() {
		configurations.orientation = horizontal ? "horizontal" : undefined;
	}

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<Select
	bind:value={configurations.itemsStyle}
	label="Items style"
	nullable={false}
	disabled={configurations.role === "group" ||
		configurations.role === "radiogroup"}
	options={[
		{ label: "Textual", value: "textual" },
		{ label: "Image", value: "image" },
		{ label: "Icons", value: "icon" },
		{ label: "Avatar", value: "avatar" },
		{ label: "Thumbnail", value: "thumbnail" },
		{ label: "Video", value: "video" },
	]}
	on:change={updateInstance}
/>
<Slider
	bind:value={configurations.itemsRows}
	min={1}
	max={3}
	step={1}
	label="Items rows"
	on:input={updateInstance}
/>
<Checkbox
	label="Wrap focus"
	bind:checked={configurations.wrapFocus}
	on:change={updateInstance}
/>
<Checkbox
	label="Dense"
	bind:checked={configurations.dense}
	on:change={updateInstance}
/>
<Checkbox
	bind:checked={horizontal}
	label="Horizontal"
	on:change={handleOrientationChange}
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
