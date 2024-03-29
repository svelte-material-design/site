<svelte:options immutable={true} />

<script lang="ts">
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import {
		MultipleItemsConfigurations,
		MultipleItemControls,
		MultipleItemSelector,
	} from "src/components/configurator/common-options/multiple-items";
	import {
		CommonListItemConfigurations,
		BaseListConfigurations,
		ItemsStyle,
	} from "src/components/configurator/smui-components/list";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { selectedItem$ } = multipleItemsHandler;

	function updateInstance() {
		$configurations$ = { ...$configurations$ };
	}
</script>

<Section>
	<Select
		bind:value={$configurations$.variant}
		label="Variant"
		nullable={false}
		options={[
			{ label: "Permanent", value: "permanent" },
			{ label: "Dismissible", value: "dismissible" },
			{ label: "Modal", value: "modal" },
		]}
		on:change={updateInstance}
	/>
	<Select
		bind:value={$configurations$.layout}
		label="Layout"
		nullable={false}
		options={[
			{ label: "", value: "" },
			{ label: "Full Height + Top App Bar", value: "full-height" },
			{ label: "Below Top App Bar", value: "below-top-app-bar" },
		]}
		on:change={updateInstance}
	/>
	<Checkbox
		label="Open drawer"
		disabled={$configurations$.variant === "permanent"}
		bind:checked={$configurations$.open}
		on:change={updateInstance}
	/>
	<Checkbox
		label="Show title"
		on:change={(e) => {
			$configurations$.title = e.detail.checked ? "Title" : undefined;
			updateInstance();
		}}
	/>
	<Checkbox
		label="Show subtitle"
		disabled={!$configurations$.title}
		on:change={(e) => {
			$configurations$.subtitle = e.detail.checked ? "Subtitle" : undefined;
			updateInstance();
		}}
	/>
</Section>
<Section>
	<ItemsStyle
		bind:value={$configurations$.itemsStyle}
		on:change={updateInstance}
	/>
	<BaseListConfigurations bind:configurations={$configurations$} />
</Section>
<MultipleItemsConfigurations {multipleItemsHandler}>
	<MultipleItemSelector label="Edit item" {multipleItemsHandler} />
	<Section>
		<CommonListItemConfigurations
			bind:configurations={$selectedItem$}
			listConfigurations={$configurations$}
			labelFn={() =>
				`Nav item ${$configurations$.items.findIndex(
					(item) => item.id === $selectedItem$.id
				)}`}
		/>
	</Section>
	<MultipleItemControls {multipleItemsHandler} />
</MultipleItemsConfigurations>
