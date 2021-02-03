<svelte:options immutable={true} />

<script lang="ts">
	import { createEventDispatcher, tick } from "svelte";
	import type { MultipleItemsHandler } from "./MultipleItemsHandler";

	export let multipleItemsHandler: MultipleItemsHandler;

	const { items$ } = multipleItemsHandler;

	const dispatch = createEventDispatcher<{
		itemsChange: void;
	}>();

	items$.subscribe(() => {
		dispatch("itemsChange");
	})
</script>

<slot />
