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
		MenuListType,
		Content,
		PrimaryText,
		SecondaryText,
		Icon,
	} from "@smui/core/menu";
	import type { IconType } from "src/components/configurator/smui-components/icons";
	import ListItem from "src/components/configurator/smui-components/ListItem.svelte";

	export let value: string = undefined;
	export let disabled: boolean;
	export let ripple: boolean;
	export let selected: boolean;
	export let ariaLabel: string;
	export let title: string;
	export let label: string;
	export let labelRow2: string;
	export let labelRow3: string;

	export let leadingIcon: IconType;
	export let trailingIcon: IconType;
	export let clickableLeadingIcon: boolean;
	export let clickableTrailingIcon: boolean;

	export let listType: MenuListType;
	export let listItemsRows: number;

	let listItem: ListItem;

	export function getImageSrc() {
		return listItem.getImageSrc();
	}

	export function getImageTxt() {
		return listItem.getImageTxt();
	}
</script>

<ListItem
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
/>
