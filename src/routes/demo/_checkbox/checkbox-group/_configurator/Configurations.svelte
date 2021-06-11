<svelte:options immutable={true} />

<script lang="ts">
	import {
		MultipleItemsConfigurations,
		MultipleItemControls,
		MultipleItemSelector,
	} from "src/components/configurator/common-options/multiple-items";
	import { CheckboxConfigurations } from "../../_configurator/components/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { multipleItemsHandler } = getConfiguratorContext();
	const { selectedItem$ } = multipleItemsHandler;
</script>

<MultipleItemsConfigurations {multipleItemsHandler}>
	<MultipleItemSelector label="Edit checkbox" {multipleItemsHandler} />
	<CheckboxConfigurations bind:configurations={$selectedItem$} />
	<MultipleItemControls {multipleItemsHandler} />
</MultipleItemsConfigurations>
