<svelte:options immutable={true} />

<script lang="ts">
	import {
		MultipleItemsConfigurations,
		MultipleItemControls,
		MultipleItemSelector,
	} from "src/components/configurator/common-options/multiple-items";
	import { Configurations as CheckboxConfigurations } from "../../_configurator";
	import { Section } from "src/components/configurator/molecules/configurations";
	import { CheckboxConfigurationsItem } from "./types";

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
		{multipleItemsConfigurations}
	/>
	<CheckboxConfigurations
		bind:checked={selectedItem.checked}
		bind:ripple={selectedItem.ripple}
		bind:allowIndeterminated={selectedItem.allowIndeterminated}
		bind:disabled={selectedItem.disabled}
		bind:readonly={selectedItem.readonly}
		bind:accessibleTouch={selectedItem.accessibleTouch}
		on:change={handleChange}
	/>
	<MultipleItemControls
		itemFactory={createItem}
		{multipleItemsConfigurations}
	/>
</MultipleItemsConfigurations>
