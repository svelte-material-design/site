<svelte:options immutable={true} />

<script lang="ts">
	import { TabBar } from "@svelte-material-design/core/tab-bar";
	import { Tab } from "./components/preview";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { items$ } = multipleItemsHandler;

	async function handleChange() {
		multipleItemsHandler.updateSelectedInstance();
	}
</script>

<TabBar
	bind:active={$configurations$.active}
	focusOnActivate={$configurations$.focusOnActivate}
	activateOnKeyboardNavigation={$configurations$.activateOnKeyboardNavigation}
	transition={$configurations$.transition}
	on:change={handleChange}
>
	{#each $items$ as tab}
		<Tab bind:configurations={tab} on:selected={handleChange} />
	{/each}
</TabBar>
