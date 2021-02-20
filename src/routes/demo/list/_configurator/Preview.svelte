<svelte:options immutable={true} />

<script lang="ts">
	import { List, Separator } from "@smui/core/list";
	import { ListItem } from "./preview";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { items$ } = multipleItemsHandler;

	function handleChange() {
		multipleItemsHandler.updateSelectedInstance();
	}
</script>

<List
	bind:value={$configurations$.value}
	selectionType={$configurations$.selectionType}
	nullable={$configurations$.nullable}
	orientation={$configurations$.orientation}
	type={$configurations$.itemsStyle}
	itemsRows={$configurations$.itemsRows}
	wrapFocus={$configurations$.wrapFocus}
	dense={$configurations$.dense}
	role={$configurations$.role}
	on:change={handleChange}
>
	{#each $items$ as item, index}
		<ListItem
			bind:configurations={item}
			listRole={$configurations$.role}
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
