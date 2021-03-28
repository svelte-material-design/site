<svelte:options immutable={true} />

<script lang="ts">
	import {
		Content,
		Item,
		Icon,
		PrimaryText,
		SecondaryText,
	} from "@smui/core/list";
	import type { ListItemConfigurations, ListConfigurations } from "../types";
	import { ListItem } from "src/components/configurator/smui-components/list";

	export let configurations: ListItemConfigurations;
	export let listConfigurations: ListConfigurations;
</script>

<ListItem
	component={Item}
	contentComponent={Content}
	primaryTextComponent={PrimaryText}
	secondaryTextComponent={SecondaryText}
	iconComponent={Icon}
	bind:configurations
	{listConfigurations}
	on:change
/>
