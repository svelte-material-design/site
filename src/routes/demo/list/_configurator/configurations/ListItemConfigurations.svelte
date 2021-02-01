<svelte:options immutable={true} />

<script lang="ts">
	import { ListRole } from "@svelte-material-design/core/list";
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { createEventDispatcher, tick } from "svelte";
	import type { ListItemConfigurations } from "../types";

	export let configurations: ListItemConfigurations;
	export let listRole: ListRole | "listbox";

	const dispatch = createEventDispatcher<{
		change: void;
	}>();

	let useHref: boolean = false;

	$: {
		if (listRole === "list") {
			configurations.selected = false;
		} else {
			useHref = false;
		}

		if (useHref) {
			configurations.href = "javascript:void(0);";
		} else {
			configurations.href = undefined;
		}

		handleChange();
	}

	async function handleChange() {
		await tick();

		dispatch("change");
	}
</script>

<Checkbox
	bind:checked={configurations.selected}
	label="Selected"
	disabled={listRole === "list"}
	on:change={handleChange}
/>
<Checkbox
	bind:checked={useHref}
	label="Href"
	disabled={listRole !== "list"}
	on:change={handleChange}
/>
