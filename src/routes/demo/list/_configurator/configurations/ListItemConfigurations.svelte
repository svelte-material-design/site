<svelte:options immutable={true} />

<script lang="ts">
	import { ListRole } from "@svelte-material-design/core/list";
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import type { ListItemConfigurations } from "../types";

	export let configurations: ListItemConfigurations;
	export let listRole: ListRole | "listbox";

	$: if (listRole === "list") {
		configurations.selected = false;
		handleChange();
	}

	function handleChange() {
		configurations = { ...configurations };
	}
</script>

<Checkbox
	bind:checked={configurations.selected}
	label="Selected"
	disabled={listRole === "list"}
	on:change={handleChange}
	on:change
/>
