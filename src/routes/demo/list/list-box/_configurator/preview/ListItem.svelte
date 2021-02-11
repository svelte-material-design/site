<svelte:options immutable={true} />

<script lang="ts">
	import {
		Content,
		Item,
		Icon,
		PrimaryText,
		SecondaryText,
	} from "@smui/core/list";
	import type { ListItemsStyle } from "@smui/core/list";
	import type { ListItemConfigurations } from "../types";
	import ListItem from "src/components/configurator/smui-components/ListItem.svelte";

	export let configurations: ListItemConfigurations;
	export let listItemsStyle: ListItemsStyle;
	export let listItemsRows: number;

	const listRole = "listbox";
</script>

<ListItem
	component={Item}
	contentComponent={Content}
	primaryTextComponent={PrimaryText}
	secondaryTextComponent={SecondaryText}
	iconComponent={Icon}
	bind:selected={configurations.selected}
	value={configurations.value}
	disabled={configurations.disabled}
	ripple={configurations.ripple}
	ariaLabel={configurations.ariaLabel}
	title={configurations.title}
	label={configurations.label}
	labelRow2={configurations.labelRow2}
	labelRow3={configurations.labelRow3}
	leadingIcon={configurations.leadingIcon}
	trailingIcon={configurations.trailingIcon}
	{listRole}
	{listItemsStyle}
	{listItemsRows}
	let:selected
	on:change
/>
