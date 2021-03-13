<svelte:options immutable={true} />

<script lang="ts">
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { onMount, tick } from "svelte";
	import type { MenuConfigurations } from "../types";

	export let configurations: MenuConfigurations;

	onMount(async () => {
		await tick();

		updateInstance();
	});

	function updateInstance() {
		configurations = { ...configurations };
	}

	function onSelectionTypeUpdate() {
		if (!configurations.selectionType) {
			configurations.showSelectionGroup = false;
		}

		updateInstance();
	}
</script>

<UseState
	value={configurations.selectionType}
	onUpdate={onSelectionTypeUpdate}
/>

<Checkbox
	label="Show selection group"
	bind:checked={configurations.showSelectionGroup}
	disabled={!configurations.selectionType}
	on:change={updateInstance}
/>
