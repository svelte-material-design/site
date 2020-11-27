<script lang="ts">
	import { UseState } from "@svelte-material-ui-test/core/common/hooks";
	import { onMount, tick } from "svelte";
	import { beforeOrAfter } from "./domBeforeOrAfter";
	import { GroupBinding, SelectableItem } from "./types";

	export let items: SelectableItem[] = [];
	export let value: string[] = undefined;
	export let nullable: boolean = true;

	let mounted: boolean = false;
	let group: GroupBinding = {
		registerItem,
		unregisterItem,
		updateItem,
	};

	checkAndFixValue();

	onMount(async () => {
		await tick();

		if (nullable) {
			if (value === null || value !== undefined) {
				updateItems();
			} else {
				debugger;
				updateValue();
			}
		} else {
			if (value != undefined && value.length > 0) {
				updateItems();
			} else {
				updateValue();
			}
		}

		mounted = true;
	});

	function updateItems() {
		items.forEach((item) => {
			if (
				(nullable && value === null) ||
				(!item.selected && value.includes(item.value))
			) {
				item.setSelected(true);
			} else if (item.selected && !value.includes(item.value)) {
				item.setSelected(false);
			}
		});
	}

	function checkAndFixValue() {
		if (!Array.isArray(value)) {
			if (typeof value === "string") {
				value = [value];
			} else if (nullable) {
				if (value != undefined) {
					value = undefined;
				}
			}
		}
	}

	function handleValueUpdate() {
		checkAndFixValue();

		if (!nullable && (value == undefined || !value.length) && items.length) {
			value = [items[0].value];
		}

		value?.forEach((itemValue) => {
			const item = items.find((item) => item.value === itemValue);
			if (item && !item.selected) {
				item.setSelected(true);
			}
		});

		items
			.filter((item) => !value || !value.includes(item.value))
			.forEach((item) => {
				if (item.selected) {
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
		const newValue = items
			.filter((items) => items.selected)
			.map((items) => items.value);

		if (nullable) {
			if (value != undefined) {
				value = newValue;
			}
		} else {
			value = newValue.length ? newValue : items.length ? [items[0].value] : [];
		}
	}

	function updateItem(item: SelectableItem) {
		console.warn("updateItem", item);
		updateItemsRef();
		updateValue();
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
		if (mounted) {
			updateValue();
		}
	}

	function sortItems() {
		if (typeof window !== "undefined") {
			items.sort((a, b) => beforeOrAfter(a.dom, b.dom));
		}
		updateItemsRef();
	}
</script>

<svelte:options immutable={true} />

<UseState {value} onUpdate={handleValueUpdate} />
<UseState value={nullable} onUpdate={updateValue} />

<slot {group} />
