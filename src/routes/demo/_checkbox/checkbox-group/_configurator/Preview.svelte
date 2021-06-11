<svelte:options immutable={true} />

<script lang="ts">
	import { Checkbox } from "../../_configurator/components/preview";
	import { CheckboxGroup } from "@svelte-material-design/core/checkbox";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { items$ } = multipleItemsHandler;

	function handleChange() {
		multipleItemsHandler.updateSelectedInstance();
	}
</script>

<CheckboxGroup bind:value={$configurations$.value} on:change={handleChange}>
	{#each $items$ as item}
		<Checkbox bind:configurations={item} />
	{/each}
</CheckboxGroup>
