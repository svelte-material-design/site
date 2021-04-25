<svelte:options immutable={true} />

<script lang="ts">
	import { ChipSet } from "@svelte-material-design/core/chips";
	import { Chip } from "./components/preview";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { items$ } = multipleItemsHandler;

	async function handleChange() {
		multipleItemsHandler.updateSelectedInstance();
	}
</script>

<ChipSet
	bind:value={$configurations$.value}
	variant={$configurations$.variant}
	entryAnimation={$configurations$.entryAnimation}
	nullable={$configurations$.nullable}
	on:change={handleChange}
>
	{#each $items$ as chip}
		<Chip bind:configurations={chip} on:change={handleChange} />
	{/each}
</ChipSet>
