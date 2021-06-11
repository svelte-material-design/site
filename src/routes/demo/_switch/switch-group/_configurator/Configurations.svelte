<svelte:options immutable={true} />

<script lang="ts">
	import {
		SelectionTypeConfiguration,
		NullableConfiguration,
	} from "src/components/configurator/common-options";
	import {
		MultipleItemsConfigurations,
		MultipleItemControls,
		MultipleItemSelector,
	} from "src/components/configurator/common-options/multiple-items";
	import { Section } from "src/components/configurator/molecules/configurations";
	import { SwitchConfigurations } from "../../_configurator/components/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { selectedItem$ } = multipleItemsHandler;

	function handleChange() {
		$configurations$ = { ...$configurations$ };
	}

</script>

<Section>
	<SelectionTypeConfiguration
		bind:value={$configurations$.selectionType}
		clearable={false}
		on:change={handleChange}
	/>
	<NullableConfiguration
		bind:checked={$configurations$.nullable}
		on:change={handleChange}
	/>
</Section>
<MultipleItemsConfigurations {multipleItemsHandler}>
	<MultipleItemSelector label="Edit switch" {multipleItemsHandler} />
	<SwitchConfigurations bind:configurations={$selectedItem$} />
	<MultipleItemControls {multipleItemsHandler} />
</MultipleItemsConfigurations>
