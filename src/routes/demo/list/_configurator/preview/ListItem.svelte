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
	import { ListItem } from "src/components/configurator/smui-components/list";
	import type { ListRole } from "src/components/configurator/smui-components/list/types";

	export let configurations: ListItemConfigurations;
	export let listRole: ListRole;
	export let listItemsStyle: ListItemsStyle;
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
	{listRole}
	{listItemsStyle}
	{listItemsRows}
	on:change
/>
