<svelte:options immutable={true} />

<script lang="ts">
	import { Switch } from "../../_configurator/components/preview";
	import { SwitchGroup } from "@svelte-material-design/core/switch";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { items$ } = multipleItemsHandler;

	function handleChange() {
		multipleItemsHandler.updateSelectedInstance();
	}

</script>

<SwitchGroup
	bind:value={$configurations$.value}
	selectionType={$configurations$.selectionType}
	nullable={$configurations$.nullable}
	on:change={handleChange}
>
	{#each $items$ as item}
		<Switch bind:configurations={item} />
	{/each}
</SwitchGroup>
