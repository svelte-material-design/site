<svelte:options immutable={true} />

<script lang="ts">
	import {
		MultipleItemsConfigurations,
		MultipleItemControls,
		MultipleItemSelector,
	} from "src/components/configurator/common-options/multiple-items";
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import {
		TabBarConfigurations,
		TabConfigurations,
	} from "./components/configurations";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { selectedItem$ } = multipleItemsHandler;
</script>

<Section>
	<TabBarConfigurations bind:configurations={$configurations$} />
</Section>
<MultipleItemsConfigurations {multipleItemsHandler}>
	<MultipleItemSelector label="Edit item" {multipleItemsHandler} />
	<Section>
		<TabConfigurations bind:configurations={$selectedItem$} />
	</Section>
	<MultipleItemControls {multipleItemsHandler} />
</MultipleItemsConfigurations>
