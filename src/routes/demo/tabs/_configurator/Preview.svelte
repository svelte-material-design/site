<svelte:options immutable={true} />

<script lang="ts">
	import { TabBar } from "@svelte-material-design/core/tab-bar";
	import { Tab } from "./components/preview";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import { Button } from "@svelte-material-design/core/button";
	import { onMount, tick } from "svelte";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { items$ } = multipleItemsHandler;

	function handleClick() {
		$configurations$.value = undefined;
	}

	async function handleChange() {
		multipleItemsHandler.updateSelectedInstance();
	}
</script>

<TabBar
	bind:value={$configurations$.value}
	focusOnActivate={$configurations$.focusOnActivate}
	activateOnKeyboardNavigation={$configurations$.activateOnKeyboardNavigation}
	transition={$configurations$.transition}
	nullable={$configurations$.nullable}
	on:change={handleChange}
>
	{#each $items$ as tab}
		<Tab bind:configurations={tab} on:change={handleChange} />
	{/each}
</TabBar>

{#if $configurations$.nullable}
	<div style="display: flex; justify-content: center;">
		<Button on:click={handleClick}>Clear</Button>
	</div>
{/if}
