<svelte:options immutable={true} />

<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import { MenuSurfaceConfigurations } from "src/components/configurator/smui-components/menu-surface";
	import {
		CommonSelectableListConfigurations,
		CommonListItemConfigurations,
		BaseListConfigurations,
	} from "src/components/configurator/smui-components/list";
	import {
		MultipleItemsConfigurations,
		MultipleItemControls,
		MultipleItemSelector,
	} from "src/components/configurator/common-options/multiple-items";
	import { MenuConfigurations } from "./components/configurations";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { selectedItem$ } = multipleItemsHandler;
</script>

<MultipleItemsConfigurations {multipleItemsHandler}>
	<MenuConfigurations bind:configurations={$configurations$} />
	<Typography variant="body2">List configurations</Typography>
	<Section>
		<CommonSelectableListConfigurations
			onlySingleSelection
			bind:configurations={$configurations$}
		/>
	</Section>
	<Section>
		<BaseListConfigurations
			bind:configurations={$configurations$}
			maxItemsRows={2}
		/>
	</Section>
	<Typography variant="body2">Menu surface configurations</Typography>
	<Section>
		<MenuSurfaceConfigurations bind:configurations={$configurations$} />
	</Section>
	<MultipleItemSelector label="Edit item" {multipleItemsHandler} />
	<Section>
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
