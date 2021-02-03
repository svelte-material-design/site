<svelte:options immutable={true} />

<script lang="ts">
	import { Select } from "../../atoms/configurations";
	import { Section } from "../../molecules/configurations";
	import type { MultipleItemsHandler } from "./MultipleItemsHandler";

	export let label: string;
	export let multipleItemsHandler: MultipleItemsHandler;

	const { items$, selectedItem$ } = multipleItemsHandler;

	function handleSelection(id: string) {
		multipleItemsHandler.setSelectedItem(id);
	}
</script>

<Section>
	<Select
		{label}
		nullable={false}
		value={$selectedItem$ && $selectedItem$.id}
		options={$items$.map((item) => ({
			value: item.id,
			label: item.label,
		}))}
		on:change={(e) => handleSelection(e.detail.value)}
		on:change
	/>
</Section>
