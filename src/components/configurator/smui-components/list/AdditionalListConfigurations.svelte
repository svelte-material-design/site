<svelte:options immutable={true} />

<script lang="ts">
	import { onMount } from "svelte";
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import type { ListConfigurations } from "./types";
	import { ItemsStyle } from ".";

	export let configurations: Partial<ListConfigurations>;

	let horizontal: boolean;

	onMount(() => {
		handleOrientationChange();
		updateInstance();
	});

	async function handleOrientationChange() {
		configurations.orientation = horizontal ? "horizontal" : undefined;
	}

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<ItemsStyle
	bind:value={configurations.itemsStyle}
	disabled={configurations.role === "group" ||
		configurations.role === "radiogroup"}
	on:change={updateInstance}
/>
<Checkbox
	label="Wrap focus"
	bind:checked={configurations.wrapFocus}
	on:change={updateInstance}
/>
<Checkbox
	bind:checked={horizontal}
	label="Horizontal"
	on:change={handleOrientationChange}
	on:change={updateInstance}
/>
<Checkbox
	label="Use typeahead"
	bind:checked={configurations.typeahead}
	on:change={updateInstance}
/>
