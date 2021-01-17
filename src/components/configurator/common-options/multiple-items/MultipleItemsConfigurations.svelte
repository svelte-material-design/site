<svelte:options immutable={true} />

<script lang="ts">
	import { Use } from "@raythurnevoid/svelte-hooks";
	import type { Item } from "./types";

	export let itemFactory: (index: number) => Item;
	export let items: Item[];
	export let selectedItem: Item = {} as Item;

	let selectedItemId: string;

	export function updateSelectedInstance() {
		const index = items.findIndex((item) => item.id === selectedItemId);

		if (!~index) return;

		selectedItem = { ...items[index] };
		items[index] = selectedItem;
		items = [...items];
	}

	export function setItems(newValue: Item[]) {
		items = [...newValue];
		updateSelectedInstance();
	}

	export function getItems(): Item[] {
		return items;
	}

	export function setSelectedItem(id: string) {
		selectedItemId = id;
		updateSelectedInstance();
	}

	export function getSelectedItem(): Item {
		return selectedItem;
	}
</script>

<Use
	hook={updateSelectedInstance}
	when={!!selectedItemId}
	deps={selectedItemId}
/>

<slot />
