<svelte:options immutable={true} />

<script lang="ts">
	import {
		MultipleItemsConfigurations,
		MultipleItemControls,
		MultipleItemSelector,
	} from "src/components/configurator/common-options/multiple-items";
	import { ListBoxConfigurations as ListBoxConfigurationsComponent } from "./configurations";
	import {
		CommonListConfigurations,
		CommonListItemConfigurations,
		ListItemConfigurations as ListItemConfigurationsComponent,
	} from "../../_configurator/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { selectedItem$ } = multipleItemsHandler;
</script>

<MultipleItemsConfigurations {multipleItemsHandler}>
	<Section>
		<ListBoxConfigurationsComponent bind:configurations={$configurations$} />
		<CommonListConfigurations bind:configurations={$configurations$} />
	</Section>
	<MultipleItemSelector label="Edit tab" {multipleItemsHandler} />
	<Section>
		<ListItemConfigurationsComponent
			listConfigurations={$configurations$}
			bind:configurations={$selectedItem$}
		/>
		<CommonListItemConfigurations
			bind:configurations={$selectedItem$}
			listConfigurations={$configurations$}
			labelFn={() =>
				`Item ${$configurations$.items.findIndex(
					(item) => item.id === $selectedItem$.id
				)}`}
		/>
	</Section>
	<MultipleItemControls {multipleItemsHandler} />
</MultipleItemsConfigurations>
