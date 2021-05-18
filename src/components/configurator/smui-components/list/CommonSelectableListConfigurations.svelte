<svelte:options immutable={true} />

<script lang="ts">
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { onMount } from "svelte";
	import { AdditionalListConfigurations } from ".";
	import { SelectionTypeConfiguration } from "../../common-options";
	import type { ListConfigurations } from "./types";

	export let configurations: ListConfigurations;
	export let selectionTypeDisabled: boolean = false;
	export let onlySingleSelection: boolean = false;

	onMount(() => {
		updateInstance();
	});

	function updateInstance() {
		configurations = { ...configurations };
	}

</script>

<SelectionTypeConfiguration
	bind:value={configurations.selectionType}
	disabled={selectionTypeDisabled}
	clearable={!configurations.role}
	{onlySingleSelection}
	on:change={updateInstance}
/>
<AdditionalListConfigurations bind:configurations />
<Checkbox
	label="Nullable"
	bind:checked={configurations.nullable}
	on:change={updateInstance}
/>
