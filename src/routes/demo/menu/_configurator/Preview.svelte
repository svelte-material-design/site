<svelte:options immutable={true} />

<script lang="ts">
	import { Button } from "@svelte-material-design/core/button";
	import {
		Menu,
		Separator,
		SelectionGroup,
	} from "@svelte-material-design/core/menu";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import { MenuItem } from "./preview";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { items$ } = multipleItemsHandler;

	function handleChange() {
		multipleItemsHandler.updateSelectedInstance();
	}

	function openMenu() {
		$configurations$.open = true;
		updateInstance();
	}

	function updateInstance() {
		$configurations$ = { ...$configurations$ };
	}
</script>

<div style={$configurations$.anchor ? "position: relative;" : ""}>
	<Button on:click={openMenu}>Open Menu</Button>
	<Menu
		bind:open={$configurations$.open}
		bind:value={$configurations$.value}
		selectionType={$configurations$.selectionType}
		nullable={$configurations$.nullable}
		anchorCorner={$configurations$.anchorCorner}
		anchorFlipRtl={$configurations$.anchorFlipRtl}
		quickOpen={$configurations$.quickOpen}
		variant={$configurations$.variant}
		anchorMargin={$configurations$.anchorMargin}
		anchor={$configurations$.anchor}
		wrapFocus={$configurations$.wrapFocus}
		typeahead={$configurations$.typeahead}
		dense={$configurations$.dense}
		density={$configurations$.density}
		orientation={$configurations$.orientation}
		itemsRows={$configurations$.itemsRows}
		itemsStyle={$configurations$.itemsStyle}
		hoisted={$configurations$.hoisted}
	>
		{#if $configurations$.showSelectionGroup}
			<SelectionGroup>
				{#each $items$ as item, index}
					<MenuItem
						bind:configurations={item}
						menuConfigurations={$configurations$}
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
			</SelectionGroup>
		{:else}
			{#each $items$ as item, index}
				<MenuItem
					bind:configurations={item}
					menuConfigurations={$configurations$}
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
		{/if}
	</Menu>
</div>
