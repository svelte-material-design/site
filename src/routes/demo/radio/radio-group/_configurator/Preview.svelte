<svelte:options immutable={true} />

<script lang="ts">
	import { Radio } from "../../_configurator/components/preview";
	import { RadioGroup } from "@svelte-material-design/core/radio";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { items$ } = multipleItemsHandler;

	function handleChange() {
		multipleItemsHandler.updateSelectedInstance();
	}
</script>

<RadioGroup bind:value={$configurations$.value} on:change={handleChange}>
	{#each $items$ as item}
		<Radio bind:configurations={item} />
	{/each}
</RadioGroup>
