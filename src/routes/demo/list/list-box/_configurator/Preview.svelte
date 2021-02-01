<svelte:options immutable={true} />

<script lang="ts">
	import { ListBox, Separator } from "@smui/core/list";
	import { ListBoxConfigurations } from "./types";
	import { ListItem } from "./preview";
	import { UseState } from "@raythurnevoid/svelte-hooks";

	export let configurations: ListBoxConfigurations;
	let value: string | string[];

	function handleChange() {
		configurations.value = value;
		configurations = { ...configurations };
	}
</script>

<UseState {value} onUpdate={handleChange} />

<ListBox
	bind:value
	multiSelection={configurations.multiSelection}
	orientation={configurations.orientation}
	type={configurations.type}
	itemsRows={configurations.itemsRows}
	wrapFocus={configurations.wrapFocus}
	dense={configurations.dense}
	on:change={handleChange}
>
	{#each configurations.items as item, index}
		<ListItem
			bind:configurations={item}
			listType={configurations.type}
			listItemsRows={configurations.itemsRows}
			on:change={handleChange}
		/>
		{#if index === 0 && configurations.separator}
			<Separator
				insetPadding={configurations.separatorInsetPadding}
				insetLeading={configurations.separatorInsetLeading}
				insetTrailing={configurations.separatorInsetTrailing}
			/>
		{/if}
	{/each}
</ListBox>
