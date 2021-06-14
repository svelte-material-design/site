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
		ChipSetConfigurations,
		ChipConfigurations,
	} from "./components/configurations";
	import { tick } from "svelte";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { selectedItem$, items$ } = multipleItemsHandler;

	async function updateInstance() {
		await tick();
		const variant = $configurations$.variant;
		if (variant === "filter") {
			$items$ = $items$.map((item) => ({
				...item,
				useCheckmark: true,
			}));
		} else if (variant === "choice") {
			$items$ = $items$.map((item) => ({
				...item,
				useCheckmark: false,
			}));
		}

		multipleItemsHandler.updateSelectedInstance();
	}
</script>

<Section>
	<ChipSetConfigurations
		bind:configurations={$configurations$}
		on:change={updateInstance}
	/>
</Section>
<MultipleItemsConfigurations {multipleItemsHandler}>
	<MultipleItemSelector label="Edit item" {multipleItemsHandler} />
	<Section>
		<ChipConfigurations
			bind:configurations={$selectedItem$}
			chipSetConfigurations={$configurations$}
		/>
	</Section>
	<MultipleItemControls {multipleItemsHandler} />
</MultipleItemsConfigurations>
