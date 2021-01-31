<svelte:options immutable={true} />

<script lang="ts">
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { createEventDispatcher, tick } from "svelte";
	import type { Item } from "./types";

	export let items: Item[];
	export let selectedItem: Item = {} as Item;

	const dispatch = createEventDispatcher<{
		itemsChange: void;
	}>();

	let selectedItemId: string;
	let selectedItemIdState: UseState;
	let itemsState: UseState;

	export async function updateSelectedInstance() {
		const index = items.findIndex((item) => item.id === selectedItemId);

		if (!~index) return;

		selectedItem = { ...items[index] };
		items[index] = selectedItem;
		items = [...items];
		itemsState.setValue(items);

		await tick();
	}

	export async function setItems(newValue: Item[]) {
		items = [...newValue];
		updateSelectedInstance();

		await tick();

		dispatch("itemsChange");
	}

	export function getItems(): Item[] {
		return items;
	}

	export function setSelectedItem(id: string) {
		selectedItemId = id;
		selectedItemIdState.setValue(selectedItemId);
		updateSelectedInstance();
	}

	export function getSelectedItem(): Item {
		return selectedItem;
	}
</script>

<UseState
	bind:this={selectedItemIdState}
	value={selectedItemId}
	onUpdate={updateSelectedInstance}
/>
<UseState
	bind:this={itemsState}
	value={items}
	onUpdate={updateSelectedInstance}
/>

<slot />
