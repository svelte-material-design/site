<svelte:options immutable={true} />

<script lang="ts">
	import { List, Separator } from "@svelte-material-design/core/list";
	import { ListItem } from "./components/preview";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { items$ } = multipleItemsHandler;

	async function handleChange() {
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
	typeahead={$configurations$.typeahead}
	on:change={handleChange}
>
	{#each $items$ as item, index}
		<ListItem
			bind:configurations={item}
			listConfigurations={$configurations$}
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
