<svelte:options immutable={true} />

<script lang="ts">
	import {
		MultipleItemsConfigurations,
		MultipleItemControls,
		MultipleItemSelector,
	} from "src/components/configurator/common-options/multiple-items";
	import {
		ListConfigurations as ListConfigurationsComponent,
		CommonListConfigurations,
		CommonListItemConfigurations,
		ListItemConfigurations as ListItemConfigurationsComponent,
	} from "./configurations";
	import { tick } from "svelte";
	import type { ListConfigurations, ListItemConfigurations } from "./types";
	import { Section } from "src/components/configurator/molecules/configurations";
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	export let multipleItemsConfigurations: MultipleItemsConfigurations;

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { selectedItem$ } = multipleItemsHandler;

	function handleChange() {
		configurations$.set({ ...$configurations$ });
	}

	async function handleItemsChange() {
		multipleItemsHandler.updateSelectedInstance();

		//configurationsState.setValue($configurations$);
	}
</script>

<!-- <UseState
	bind:this={configurationsState}
	value={$configurations$}
	onUpdate={() => multipleItemsHandler.updateSelectedInstance()}
/> -->

<MultipleItemsConfigurations {multipleItemsHandler}>
	<Section>
		<ListConfigurationsComponent
			bind:configurations={$configurations$}
			on:change={handleChange}
		/>
		<CommonListConfigurations
			bind:configurations={$configurations$}
			on:change={handleChange}
		/>
	</Section>
	<MultipleItemSelector label="Edit tab" {multipleItemsHandler} />
	<Section>
		<ListItemConfigurationsComponent
			listRole={$configurations$.role}
			configurations={$selectedItem$}
			on:change={handleItemsChange}
		/>
		<CommonListItemConfigurations
			listType={$configurations$.type}
			configurations={$selectedItem$}
			labelFn={() => `Item ${$configurations$.items.indexOf($selectedItem$)}`}
			on:change={handleItemsChange}
		/>
	</Section>
	<MultipleItemControls {multipleItemsHandler} />
</MultipleItemsConfigurations>
