<svelte:options immutable={true} />

<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import { MenuSurfaceConfigurations } from "src/components/configurator/smui-components/menu-surface";
	import {
		CommonListConfigurations,
		CommonListItemConfigurations,
	} from "src/components/configurator/smui-components/list";
	import {
		MultipleItemsConfigurations,
		MultipleItemControls,
		MultipleItemSelector,
	} from "src/components/configurator/common-options/multiple-items";
	import {
		Select,
		Checkbox,
	} from "src/components/configurator/atoms/configurations";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { selectedItem$ } = multipleItemsHandler;
</script>

<MultipleItemsConfigurations {multipleItemsHandler}>
	<Typography variant="body2">Menu configurations</Typography>
	<Section>
		<Select
			bind:value={$configurations$.selectionType}
			label="Selection Type"
			options={[
				{ label: "", value: "" },
				{ label: "Multi", value: "multi" },
				{ label: "Single", value: "single" },
			]}
			nullable={false}
		/>
		<Checkbox
			bind:checked={$configurations$.nullable}
			label="Nullable"
			disabled={!$configurations$.selectionType}
		/>
		<Checkbox bind:checked={$configurations$.hoisted} label="Hoisted" />
	</Section>
	<Section>
		<MenuSurfaceConfigurations bind:configurations={$configurations$} />
	</Section>
	<Typography variant="body2">List configurations</Typography>
	<Section>
		<CommonListConfigurations bind:configurations={$configurations$} />
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
