<script lang="ts">
	import { Button } from "@smui/core/button";
	import { Use } from "@smui/core/common/hooks";
	import { onMount, tick } from "svelte";
	import { Item } from "./types";

	export let itemFactory: (index: number) => Item;
	export let items: Item[];
	export let selectedItem: Item;
	export let selectedItemId: string;

	onMount(() => {
		tick().then(() => {
			reset();
		});
	});

	function addItem() {
		const index = Number(
			items[items.length - 1]?.value.split(":").slice(-1)[0] ?? -1
		);
		items.push(itemFactory(index + 1));

		updateItemsInstance();
	}

	function removeCurrentItem() {
		const index = items.indexOf(selectedItem);
		items = items.slice(0, index).concat(items.slice(index + 1, items.length));

		updateItemsInstance();
	}

	async function reset() {
		items = [];

		await tick();

		items = [] = Array(3)
			.fill("")
			.map((_, index) => {
				return itemFactory(index);
			});

		selectedItem = items[0];

		await tick();

		selectedItemId = items[0].id;
	}

	export function updateSelectedInstance() {
		const index = items.findIndex((item) => item.id === selectedItemId);

		if (!~index) return;

		selectedItem = { ...selectedItem } = items[index];
	}

	export function updateItemsInstance() {
		items = [...items];
		updateSelectedInstance();
	}
</script>

<svelte:options immutable={true} />

<Use
	hook={updateSelectedInstance}
	when={!!selectedItemId}
	deps={selectedItemId} />

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
