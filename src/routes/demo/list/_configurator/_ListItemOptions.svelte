<svelte:options immutable={true} />

<script lang="ts">
	import { ListRole } from "@smui/core/list";
	import { Checkbox } from "src/components/configurator/atoms/configurations";

	export let listRole: ListRole | "listbox";
	export let selected: boolean;
	$: if (listRole === "list") {
		selected = false;
	}
</script>

<Checkbox
	bind:checked={selected}
	label="Selected"
	disabled={listRole === "list"}
	on:change
/>
