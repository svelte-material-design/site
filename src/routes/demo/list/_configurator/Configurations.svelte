<svelte:options immutable={true} />

<script lang="ts">
	import {
		MultipleItemsConfigurations,
		MultipleItemControls,
		MultipleItemSelector,
	} from "src/components/configurator/common-options/multiple-items";
	import {
		ListConfigurations as ListConfigurationsComponent,
		CommonListConfigurations,
		CommonListItemConfigurations,
		ListItemConfigurations as ListItemConfigurationsComponent,
	} from "./configurations";
	import { tick } from "svelte";
	import type { ListConfigurations, ListItemConfigurations } from "./types";
	import { Section } from "src/components/configurator/molecules/configurations";

	export let configurations: ListConfigurations;
	export let multipleItemsConfigurations: MultipleItemsConfigurations;

	let selectedItem: ListItemConfigurations = {} as any;

	async function handleChange() {
		multipleItemsConfigurations.updateSelectedInstance();

		await tick();

		handleItemsChange();
	}

	function handleItemsChange() {
		configurations = { ...configurations };
	}

	function createListItem(index) {
		const value = `item:${index}`;
		return ({
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
		} as Partial<ListItemConfigurations>) as ListItemConfigurations;
	}
</script>

<MultipleItemsConfigurations
	bind:this={multipleItemsConfigurations}
	bind:items={configurations.items}
	bind:selectedItem
	on:itemsChange={handleItemsChange}
>
	<Section>
		<ListConfigurationsComponent bind:configurations on:change={handleChange} />
		<CommonListConfigurations bind:configurations on:change={handleChange} />
	</Section>
	<MultipleItemSelector
		items={configurations.items}
		label="Edit tab"
		{selectedItem}
		{multipleItemsConfigurations}
	/>
	<Section>
		<ListItemConfigurationsComponent
			listRole={configurations.role}
			bind:configurations={selectedItem}
			on:change={handleChange}
		/>
		<CommonListItemConfigurations
			listType={configurations.type}
			bind:configurations={selectedItem}
			labelFn={() => `Item ${configurations.items.indexOf(selectedItem)}`}
			on:change={handleChange}
		/>
	</Section>
	<MultipleItemControls
		itemFactory={createListItem}
		{multipleItemsConfigurations}
	/>
</MultipleItemsConfigurations>
