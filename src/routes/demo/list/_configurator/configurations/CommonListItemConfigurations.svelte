<svelte:options immutable={true} />

<script lang="ts">
	import { IconsOptions } from "src/components/configurator/smui-components/icons";
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";
	import { BaseListItemConfigurations, BaseListConfigurations } from "../types";
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { onMount } from "svelte";

	export let labelFn: () => string = undefined;
	export let listConfigurations: BaseListConfigurations;
	export let configurations: BaseListItemConfigurations;

	let useLabel: boolean = true;

	onMount(() => {
		handleListTypeUpdate();
		handleLabelChange();
		updateInstance();
	});

	function handleListTypeUpdate() {
		if (
			listConfigurations.type !== "icon" &&
			listConfigurations.type !== "textual"
		) {
			configurations.leadingIcon = null;
		} else if (
			listConfigurations.type === "icon" &&
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
	value={listConfigurations.type}
	onUpdate={() => {
		handleListTypeUpdate();
		updateInstance();
	}}
/>

<Checkbox
	bind:checked={configurations.ripple}
	label="Ripple"
	on:change={updateInstance}
/>
<Checkbox bind:checked={useLabel} label="Label" on:change={handleLabelChange} />
<Checkbox
	bind:checked={configurations.disabled}
	label="Disabled"
	on:change={updateInstance}
/>
<Section>
	<IconsOptions
		bind:leadingIcon={configurations.leadingIcon}
		leadingIconDisabled={listConfigurations.type !== "icon" &&
			listConfigurations.type !== "textual"}
		bind:trailingIcon={configurations.trailingIcon}
		on:change={updateInstance}
	/>
</Section>
