<svelte:options immutable={true} />

<script lang="ts">
	import {
		MultipleItemsConfigurations,
		MultipleItemControls,
		MultipleItemSelector,
	} from "src/components/configurator/common-options/multiple-items";
	import { ListBoxConfigurations as ListBoxConfigurationsComponent } from "./configurations";
	import {
		CommonListConfigurations,
		CommonListItemConfigurations,
		ListItemConfigurations as ListItemConfigurationsComponent,
	} from "../../_configurator/configurations";
	import { tick } from "svelte";
	import type { ListBoxConfigurations, ListItemConfigurations } from "./types";
	import { Section } from "src/components/configurator/molecules/configurations";
	import { UseState } from "@raythurnevoid/svelte-hooks";

	export let configurations: ListBoxConfigurations;
	export let multipleItemsConfigurations: MultipleItemsConfigurations;

	let selectedItem: ListItemConfigurations = {} as any;
	let configurationsState: UseState;

	async function handleChange() {
		multipleItemsConfigurations.updateSelectedInstance();

		await tick();

		handleItemsChange();
	}

	function handleItemsChange() {
		configurations = { ...configurations };
		configurationsState.setValue(configurations);
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
			leadingIcon: undefined,
		} as Partial<ListItemConfigurations>) as ListItemConfigurations;
	}
</script>

<UseState
	bind:this={configurationsState}
	value={configurations}
	onUpdate={() => multipleItemsConfigurations.updateSelectedInstance()}
/>

<MultipleItemsConfigurations
	bind:this={multipleItemsConfigurations}
	bind:items={configurations.items}
	bind:selectedItem
	on:itemsChange={handleItemsChange}
>
	<Section>
		<ListBoxConfigurationsComponent
			bind:configurations
			on:change={handleChange}
		/>
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
			listRole={"listbox"}
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
