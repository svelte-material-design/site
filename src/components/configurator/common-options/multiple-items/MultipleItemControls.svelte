<script lang="ts">
	import { Button } from "@smui/core/button";
	import { onMount, tick } from "svelte";
	import { MultipleItemsConfigurations } from ".";
	import { Item } from "./types";

	export let itemFactory: (index: number) => Item;
	export let multipleItemsConfigurations: MultipleItemsConfigurations;

	onMount(async () => {
		await tick();
		reset();
	});

	function createItem(index: number) {
		return { ...itemFactory(index), id: "" + index };
	}

	function addItem() {
		let items = multipleItemsConfigurations.getItems();
		const index = Number(
			items[items.length - 1]?.id.split(":").slice(-1)[0] ?? -1
		);
		items.push(createItem(index + 1));

		multipleItemsConfigurations.setItems(items);
	}

	function removeCurrentItem() {
		let items = multipleItemsConfigurations.getItems();
		const selectedItem = multipleItemsConfigurations.getSelectedItem();

		const index = items.indexOf(selectedItem);
		items = items.slice(0, index).concat(items.slice(index + 1, items.length));

		multipleItemsConfigurations.setItems(items);
	}

	async function reset() {
		multipleItemsConfigurations.setItems([]);

		await tick();

		const items = ([] = Array(3)
			.fill("")
			.map((_, index) => {
				return createItem(index);
			}));

		multipleItemsConfigurations.setItems(items);

		await tick();

		multipleItemsConfigurations.setSelectedItem(items[0].id);
	}
</script>

<svelte:options immutable={true} />

<div
	style="grid-column: span 2; flex-direction: row; justify-content: space-between;">
	<div>
		<Button on:click={reset}>Reset</Button>
	</div>
	<div>
		<Button on:click={removeCurrentItem}>Remove</Button>
		<Button on:click={addItem}>Add</Button>
	</div>
</div>
