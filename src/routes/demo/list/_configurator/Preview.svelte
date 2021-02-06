<svelte:options immutable={true} />

<script lang="ts">
	import { List, Separator } from "@smui/core/list";
	import { ListItem } from "./preview";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import { tick } from "svelte";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { items$ } = multipleItemsHandler;

	function handleChange() {
		multipleItemsHandler.updateSelectedInstance();
	}
</script>

<List
	bind:value={$configurations$.value}
	role={$configurations$.role}
	orientation={$configurations$.orientation}
	type={$configurations$.type}
	itemsRows={$configurations$.itemsRows}
	wrapFocus={$configurations$.wrapFocus}
	dense={$configurations$.dense}
	on:change={handleChange}
>
	{#each $items$ as item, index}
		<ListItem
			bind:configurations={item}
			listRole={$configurations$.role}
			listType={$configurations$.type}
			listItemsRows={$configurations$.itemsRows}
			on:change={handleChange}
		/>
		{#if index === 0 && $configurations$.separator}
			<Separator
				insetPadding={$configurations$.separatorInsetPadding}
				insetLeading={$configurations$.separatorInsetLeading}
				insetTrailing={$configurations$.separatorInsetTrailing}
			/>
		{/if}
	{/each}
</List>
