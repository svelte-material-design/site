<svelte:options immutable={true} />

<script lang="ts">
	import {
		MultipleItemsConfigurations,
		MultipleItemControls,
		MultipleItemSelector,
	} from "src/components/configurator/common-options/multiple-items";
	import ListItemOptions from "./_ListItemOptions.svelte";
	import ListOptions from "./_ListOptions.svelte";
	import CommonListOptions from "./_CommonListOptions.svelte";
	import CommonListItemOptions from "./_CommonListItemOptions.svelte";
	import type { ListRole, ListOrientation, ListType } from "@smui/core/list";
	import type { ListItemConfigurations } from "./types";
	import { tick } from "svelte";

	export let value: string;
	export let role: ListRole;
	export let wrapFocus: boolean = true;
	export let dense: boolean;
	export let density: number;
	export let orientation: ListOrientation;
	export let type: ListType;
	export let itemsRows: number;
	export let separator: boolean;
	export let separatorInsetPadding: boolean;
	export let separatorInsetLeading: boolean;
	export let separatorInsetTrailing: boolean;

	export let multipleItemsConfigurations: MultipleItemsConfigurations;

	export let items: ListItemConfigurations[] = [];
	let selectedItem: ListItemConfigurations = {} as any;

	async function handleOptionsChange() {
		const oldValue = value;

		multipleItemsConfigurations.updateSelectedInstance();

		await tick();

		if (oldValue !== value) {
			multipleItemsConfigurations.updateSelectedInstance();
		}
	}

	function createListItem(index) {
		const value = `item:${index}`;
		return {
			id: value,
			value,
			ripple: true,
			disabled: false,
			readonly: false,
			selected: false,
			href: undefined,
			label: `Item ${index}`,
			labelRow2: `Secondary text`,
			labelRow3: `Third line`,
			trailingIcon: undefined,
			clickableLeadingIcon: false,
			clickableTrailingIcon: false,
			leadingIcon: undefined,
		} as ListItemConfigurations;
	}
</script>

<MultipleItemsConfigurations
	bind:this={multipleItemsConfigurations}
	bind:items
	bind:selectedItem
>
	<ListOptions bind:role {type} on:change={handleOptionsChange} />
	<CommonListOptions
		bind:wrapFocus
		bind:dense
		bind:density
		bind:orientation
		bind:type
		bind:itemsRows
		bind:separator
		bind:separatorInsetPadding
		bind:separatorInsetLeading
		bind:separatorInsetTrailing
		on:change={handleOptionsChange}
	/>
	<MultipleItemSelector
		{items}
		label="Edit tab"
		{selectedItem}
		{multipleItemsConfigurations}
	/>
	<ListItemOptions
		listRole={role}
		bind:selected={selectedItem.selected}
		on:change={handleOptionsChange}
	/>
	<CommonListItemOptions
		listType={type}
		bind:ripple={selectedItem.ripple}
		bind:disabled={selectedItem.disabled}
		bind:title={selectedItem.title}
		bind:label={selectedItem.label}
		bind:ariaLabel={selectedItem.ariaLabel}
		bind:leadingIcon={selectedItem.leadingIcon}
		bind:trailingIcon={selectedItem.trailingIcon}
		bind:clickableLeadingIcon={selectedItem.clickableLeadingIcon}
		bind:clickableTrailingIcon={selectedItem.clickableTrailingIcon}
		labelFn={() => `Item ${items.indexOf(selectedItem)}`}
		ariaLabelFn={() => `Item ${items.indexOf(selectedItem)}`}
		titleFn={() => `Title ${items.indexOf(selectedItem)}`}
		on:change={handleOptionsChange}
	/>
	<MultipleItemControls
		itemFactory={createListItem}
		{multipleItemsConfigurations}
	/>
</MultipleItemsConfigurations>
