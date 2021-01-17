<svelte:options immutable={true} />

<script lang="ts">
	import type { ListType } from "@smui/core/list";
	import { createEventDispatcher, tick } from "svelte";
	import SliderOption from "src/components/configurator/common-options/base/SliderOption.svelte";
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/common-options/base";

	export let wrapFocus: boolean;
	export let orientation: string;
	export let dense: boolean;
	export let density: number = 0;
	export let separator: boolean;
	export let separatorInsetPadding: boolean;
	export let separatorInsetLeading: boolean;
	export let separatorInsetTrailing: boolean;
	export let type: ListType;
	export let itemsRows: number = 1;

	const dispatch = createEventDispatcher<{ change: any }>();

	$: if (!separator) {
		separatorInsetPadding = false;
		separatorInsetLeading = false;
		separatorInsetTrailing = false;
	}

	async function handleOrientationChange(checked: boolean) {
		orientation = checked ? "horizontal" : undefined;

		await tick();
		dispatch("change");
	}

	function handleDensityChange(value: number) {
		density = value * -1;
		dispatch("change");
	}

	function handleItemsRowsChange(value: number) {
		itemsRows = value;
		if (itemsRows > 1) {
			density = 0;
		}
		dispatch("change");
	}
</script>

<Select
	bind:value={type}
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
	on:change
/>
<div>
	<SliderOption
		value={itemsRows}
		min={1}
		max={3}
		step={1}
		label="Items rows"
		on:change={(event) => handleItemsRowsChange(event.detail.value)}
	/>
</div>
<div>
	<SliderOption
		value={density}
		min={0}
		max={4}
		step={1}
		label="Density"
		disabled={itemsRows > 1}
		showDefault
		valueText={(v) => `${v * -1}`}
		on:change={(event) => handleDensityChange(event.detail.value)}
	/>
</div>
<Checkbox label="Wrap focus" bind:checked={wrapFocus} />
<Checkbox label="Dense" bind:checked={dense} />
<Checkbox
	label="Horizontal"
	on:change={(event) => handleOrientationChange(event.detail.checked)}
/>
<Checkbox label="Separator" bind:checked={separator} />
<Checkbox
	label="Separator inset leading"
	bind:checked={separatorInsetLeading}
/>
<Checkbox
	label="Separator inset trailing"
	bind:checked={separatorInsetTrailing}
/>
<Checkbox
	label="Separator inset padding"
	bind:checked={separatorInsetPadding}
	disabled={!separator || !separatorInsetLeading || !separatorInsetTrailing}
	on:change
/>
