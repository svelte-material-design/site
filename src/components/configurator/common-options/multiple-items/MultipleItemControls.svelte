<svelte:options immutable={true} />

<script lang="ts">
	import { Button } from "@smui/core/button";
	import { onMount, tick } from "svelte";
	import { Section } from "../../molecules/configurations";
	import type { MultipleItemsHandler } from "./MultipleItemsHandler";

	export let multipleItemsHandler: MultipleItemsHandler;

	const { addItem, removeCurrentItem, reset } = multipleItemsHandler;

	onMount(async () => {
		await tick();
		reset();
	});
</script>

<Section>
	<div>
		<Button on:click={reset}>Reset</Button>
	</div>
	<div>
		<Button on:click={removeCurrentItem}>Remove</Button>
		<Button on:click={addItem}>Add</Button>
	</div>
</Section>
