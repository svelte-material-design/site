<svelte:options immutable={true} />

<script lang="ts">
	import {
		Item,
		Content,
		PrimaryText,
		SecondaryText,
		Icon,
	} from "@svelte-material-design/core/menu";
	import { SelectionGroupIcon } from "@svelte-material-design/core/menu";
	import { ListItem } from "src/components/configurator/smui-components/list";
	import type { MenuItemConfigurations, MenuConfigurations } from "../types";

	export let configurations: MenuItemConfigurations;
	export let menuConfigurations: MenuConfigurations;
</script>

<ListItem
	component={Item}
	contentComponent={Content}
	primaryTextComponent={PrimaryText}
	secondaryTextComponent={SecondaryText}
	iconComponent={Icon}
	bind:configurations
	listConfigurations={menuConfigurations}
	on:change
>
	{#if menuConfigurations.showSelectionGroup}
		<SelectionGroupIcon>done</SelectionGroupIcon>
	{/if}
</ListItem>
