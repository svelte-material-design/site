<svelte:options immutable={true} />

<script lang="ts">
	import {
		Content,
		Item,
		ListRole,
		ListType,
		Icon,
		PrimaryText,
		SecondaryText,
	} from "@smui/core/list";
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

	export let listRole: ListRole | "listbox" = undefined;
	export let listType: ListType;
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
	{clickableLeadingIcon}
	{clickableTrailingIcon}
	{listItemsRows}
	{listRole}
	{listType}
	let:selected
	on:change
/>
