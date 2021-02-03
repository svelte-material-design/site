<svelte:options immutable={true} />

<script lang="ts">
	import {
		MultipleItemsConfigurations,
		MultipleItemControls,
		MultipleItemSelector,
	} from "src/components/configurator/common-options/multiple-items";
	import { Configurations as CheckboxConfigurations } from "../../_configurator";
	import type { CheckboxConfigurationsItem } from "./types";

	export let multipleItemsConfigurations: MultipleItemsConfigurations;

	export let items: CheckboxConfigurationsItem[] = [];
	let selectedItem: CheckboxConfigurationsItem = {} as any;

	function createItem(index) {
		const value = `item:${index}`;
		return {
			id: value,
			value,
			label: `Checkbox ${index}`,
			checked: false,
			ripple: true,
			accessibleTouch: true,
			allowIndeterminated: false,
			disabled: false,
			readonly: false,
		} as CheckboxConfigurationsItem;
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
	<CheckboxConfigurations
		bind:configurations={selectedItem}
		on:change={handleChange}
	/>
	<MultipleItemControls
		itemFactory={createItem}
		multipleItemsHandler{multipleItemsConfigurations}
	/>
</MultipleItemsConfigurations>
