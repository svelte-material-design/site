<svelte:options immutable={true} />

<script lang="ts">
	import {
		MultipleItemsConfigurations,
		MultipleItemControls,
		MultipleItemSelector,
	} from "src/components/configurator/common-options/multiple-items";
	import {
		ListConfigurations as ListConfigurationsComponent,
		ListItemConfigurations as ListItemConfigurationsComponent,
	} from "./components/configurations";
	import {
		CommonListItemConfigurations,
		BaseListConfigurations,
		CommonSelectableListConfigurations,
	} from "src/components/configurator/smui-components/list";
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { selectedItem$ } = multipleItemsHandler;
</script>

<MultipleItemsConfigurations {multipleItemsHandler}>
	<Section>
		<ListConfigurationsComponent bind:configurations={$configurations$} />
	</Section>
	<Section>
		<CommonSelectableListConfigurations
			bind:configurations={$configurations$}
			selectionTypeDisabled={!$configurations$.role}
		/>
	</Section>
	<Section>
		<BaseListConfigurations bind:configurations={$configurations$} />
	</Section>
	<MultipleItemSelector label="Edit item" {multipleItemsHandler} />
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
