<svelte:options immutable={true} />

<script lang="ts">
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { onMount } from "svelte";
	import type {
		BaseListConfigurations,
		ListItemConfigurations,
	} from "../types";

	export let listConfigurations: BaseListConfigurations;
	export let configurations: ListItemConfigurations;

	let useHref: boolean = false;

	onMount(() => {
		handleListRoleUpdate();
		handleLinkChange();
		updateInstance();
	});

	function handleListRoleUpdate() {
		if (!listConfigurations.role) {
			configurations.selected = false;
		} else {
			useHref = false;
		}
	}

	function handleLinkChange() {
		if (useHref) {
			configurations.href = "javascript:void(0);";
		} else {
			configurations.href = undefined;
		}
	}

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<UseState value={listConfigurations.role} onUpdate={handleListRoleUpdate} />

<Checkbox
	bind:checked={configurations.selected}
	label="Selected"
	disabled={!listConfigurations.role}
	on:change={updateInstance}
/>
<Checkbox
	bind:checked={useHref}
	label="Href"
	disabled={!!listConfigurations.role}
	on:change={handleLinkChange}
	on:change={updateInstance}
/>
