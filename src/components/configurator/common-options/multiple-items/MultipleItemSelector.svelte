<svelte:options immutable={true} />

<script lang="ts">
	import { MultipleItemsConfigurations } from ".";
	import { Select } from "../../atoms/configurations";
	import { Section } from "../../molecules/configurations";
	import { Item } from "./types";

	export let label: string;
	export let items: Item[];
	export let selectedItem: Item;

	export let multipleItemsConfigurations: MultipleItemsConfigurations;

	function handleSelection(id: string) {
		multipleItemsConfigurations.setSelectedItem(id);
	}
</script>

<Section>
	<Select
		{label}
		nullable={false}
		value={selectedItem && selectedItem.id}
		options={items.map((item) => ({
			value: item.id,
			label: item.label,
		}))}
		on:change={(e) => handleSelection(e.detail.value)}
		on:change
	/>
</Section>
