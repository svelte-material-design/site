<svelte:options immutable={true} />

<script lang="ts" context="module">
	export interface ListItemProps {
		id: string;
		name: string;
		value: string;
		wrapFocus: boolean;
		ripple: boolean;
		disabled: boolean;
		readonly: boolean;
		selected: boolean;
		href: string;
		label: string;
		labelRow2: string;
		labelRow3: string;
		title: string;
		ariaLabel: string;
		leadingIcon: IconType;
		trailingIcon: IconType;
		clickableLeadingIcon: boolean;
		clickableTrailingIcon: boolean;
	}
</script>

<script lang="ts">
	import {
		Item,
		Content,
		PrimaryText,
		SecondaryText,
		Icon,
	} from "@smui/core/menu";
	import type { MenuItemsStyle } from "@smui/core/menu";
	import type { IconType } from "src/components/configurator/smui-components/icons";
	import { ListItem } from "src/components/configurator/smui-components/list";
	import type { MenuItemConfigurations } from "../types";

	export let configurations: MenuItemConfigurations;
	export let listItemsStyle: MenuItemsStyle;
	export let listItemsRows: number;
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
	href={configurations.href}
	{listItemsStyle}
	{listItemsRows}
	on:change
/>

<!-- <ListItem
	bind:this={listItem}
	component={Item}
	contentComponent={Content}
	primaryTextComponent={PrimaryText}
	secondaryTextComponent={SecondaryText}
	iconComponent={Icon}
	bind:selected
	{value}
	{disabled}
	{ripple}
	{ariaLabel}
	{title}
	{label}
	{labelRow2}
	{labelRow3}
	{leadingIcon}
	{trailingIcon}
	{listItemsRows}
	{listType}
	let:selected
	on:change
/> -->
