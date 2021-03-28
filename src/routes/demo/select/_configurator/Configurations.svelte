<svelte:options immutable={true} />

<script lang="ts">
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import {
		MultipleItemsConfigurations,
		MultipleItemControls,
		MultipleItemSelector,
	} from "src/components/configurator/common-options/multiple-items";
	import {
		CommonListItemConfigurations,
		BaseListConfigurations,
	} from "src/components/configurator/smui-components/list";
	import {
		SelectInputFieldConfigurations,
		BaseInputConfigurations,
	} from "src/components/configurator/smui-components/input";
	import { Typography } from "@svelte-material-design/core/typography";
	import { Checkbox } from "src/components/configurator/atoms/configurations";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { selectedItem$ } = multipleItemsHandler;

	function updateInstance() {
		$configurations$ = { ...$configurations$ };
	}
</script>

<Section>
	<SelectInputFieldConfigurations bind:configurations={$configurations$}>
		<svelte-fragment slot="additional">
			<Checkbox
				label="Show empty options"
				bind:checked={$configurations$.showEmptyOption}
				on:change={updateInstance}
			/>
			<Checkbox
				label="Nullable"
				bind:checked={$configurations$.nullable}
				on:change={updateInstance}
			/>
			<BaseInputConfigurations bind:configurations={$configurations$} />
		</svelte-fragment>
	</SelectInputFieldConfigurations>
</Section>
<Typography variant="body2">List configurations</Typography>
<Section>
	<BaseListConfigurations bind:configurations={$configurations$} />
</Section>
<MultipleItemsConfigurations {multipleItemsHandler}>
	<MultipleItemSelector label="Edit item" {multipleItemsHandler} />
	<Section>
		<CommonListItemConfigurations
			bind:configurations={$selectedItem$}
			listConfigurations={{
				...$configurations$,
				itemsStyle: "textual"
			}}
			labelFn={() =>
				`Item ${$configurations$.items.findIndex(
					(item) => item.id === $selectedItem$.id
				)}`}
		/>
	</Section>
	<MultipleItemControls {multipleItemsHandler} />
</MultipleItemsConfigurations>
