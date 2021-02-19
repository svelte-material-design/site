<svelte:options immutable={true} />

<script lang="ts">
	import { IconsOptions } from "src/components/configurator/smui-components/icons";
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";
	import type {
		ListItemConfigurations,
		CommonListConfigurations,
	} from "./types";
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { onMount } from "svelte";
	import type { ListRole } from "@svelte-material-design/core/list";

	export let labelFn: () => string = undefined;
	export let listConfigurations: CommonListConfigurations;
	export let configurations: ListItemConfigurations;
	export let listRole: ListRole;

	$: listType = listConfigurations.itemsStyle;

	let useLabel: boolean = true;
	let leadingIconDisabled: boolean = false;

	onMount(() => {
		handleListTypeRoleUpdate();
		handleLabelChange();
		updateInstance();
	});

	function handleListTypeRoleUpdate() {
		if (
			!["icon", "textual"].includes(listConfigurations.itemsStyle) ||
			["group", "radiogroup"].includes(listRole)
		) {
			leadingIconDisabled = true;
			configurations.leadingIcon = null;
		} else {
			leadingIconDisabled = false;
		}

		if (
			listConfigurations.itemsStyle === "icon" &&
			!configurations.leadingIcon
		) {
			configurations.leadingIcon = "material-icon";
		}
	}

	function handleLabelChange() {
		configurations.label = useLabel
			? labelFn
				? labelFn()
				: "Label"
			: undefined;
	}

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<UseState
	value={[listType, listRole]}
	onUpdate={() => {
		handleListTypeRoleUpdate();
		updateInstance();
	}}
/>

<Checkbox
	bind:checked={configurations.ripple}
	label="Ripple"
	on:change={updateInstance}
/>
<Checkbox
	bind:checked={useLabel}
	label="Label"
	on:change={handleLabelChange}
	on:change={updateInstance}
/>
<Checkbox
	bind:checked={configurations.disabled}
	label="Disabled"
	on:change={updateInstance}
/>
<Section>
	<IconsOptions
		bind:leadingIcon={configurations.leadingIcon}
		{leadingIconDisabled}
		bind:trailingIcon={configurations.trailingIcon}
		on:change={updateInstance}
	/>
</Section>
