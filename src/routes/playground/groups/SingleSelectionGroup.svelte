<script lang="ts">
	import { beforeOrAfter } from "./domBeforeOrAfter";

	import { GroupBinding, SelectableItem } from "./types";

	export let items: SelectableItem[] = [];
	export let value: string = undefined;

	let group: GroupBinding = {
		registerItem,
		unregisterItem,
		updateItem,
	};

	$: handleValueUpdate(value);

	function handleValueUpdate(...args: any) {
		if (typeof value !== "string") {
			if (Array.isArray(value)) {
				value = value[0];
			} else {
				value = undefined;
			}
		}

		updateItems();
	}

	function updateItems() {
		items.forEach((item) => {
			if (value === item.value && !item.selected) {
				item.setSelected(true);
			} else if (value !== item.value && item.selected) {
				item.setSelected(false);
			}
		});

		updateItemsRef();
	}

	function updateItemsRef() {
		items = [...items];
	}

	function getItemIndex(item: SelectableItem) {
		return items.indexOf(item);
	}

	function updateValue() {
		value = items.find((items) => items.selected)?.value;
	}

	function updateItem(item: SelectableItem) {
		console.warn("updateItem", item);
		if (item.selected) {
			value = item.value;
		} else {
			value = null;
		}
		updateItems();
	}

	function unregisterItem(item: SelectableItem) {
		const index = getItemIndex(item);
		if (~index) {
			items = items.slice(0, index).concat(items.slice(index + 1));
		}
		updateValue();
	}

	function registerItem(item: SelectableItem) {
		items.push(item);
		sortItems();
		updateValue();
	}

	function sortItems() {
		if (typeof window !== "undefined") {
			items.sort((a, b) => beforeOrAfter(a.dom, b.dom));
		}
		updateItemsRef();
	}
</script>

<svelte:options immutable={true} />

<slot {group} />
