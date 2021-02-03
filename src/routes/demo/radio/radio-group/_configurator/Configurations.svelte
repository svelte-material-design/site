<svelte:options immutable={true} />

<script lang="ts">
	import {
		MultipleItemsConfigurations,
		MultipleItemControls,
		MultipleItemSelector,
	} from "src/components/configurator/common-options/multiple-items";
	import { Configurations as RadioConfigurations } from "../../_configurator";
	import type { RadioConfigurationsItem } from "./types";

	export let multipleItemsConfigurations: MultipleItemsConfigurations;

	export let items: RadioConfigurationsItem[] = [];
	let selectedItem: RadioConfigurationsItem = {} as any;

	function createItem(index) {
		const value = `item:${index}`;
		return {
			id: value,
			value,
			label: `Radio ${index}`,
			checked: false,
			ripple: true,
			accessibleTouch: true,
			disabled: false,
			readonly: false,
		} as RadioConfigurationsItem;
	}

	async function handleChange() {
		multipleItemsConfigurations.updateSelectedInstance();
	}
</script>

<MultipleItemsConfigurations
	bind:this={multipleItemsConfigurations}
	bind:items
	bind:selectedItem
>
	<MultipleItemSelector
		{items}
		label="Edit checkbox"
		{selectedItem}
		multipleItemsHandler{multipleItemsConfigurations}
	/>
	<RadioConfigurations
		bind:configurations={selectedItem}
		on:change={handleChange}
	/>
	<MultipleItemControls
		itemFactory={createItem}
		multipleItemsHandler{multipleItemsConfigurations}
	/>
</MultipleItemsConfigurations>
