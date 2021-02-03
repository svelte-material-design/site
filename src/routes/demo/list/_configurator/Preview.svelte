<svelte:options immutable={true} />

<script lang="ts">
	import { List, Separator } from "@smui/core/list";
	import { ListItem } from "./preview";
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();

	let value: string | string[];

	function handleChange() {
		configurations$.update((configurations) => {
			return {
				...configurations,
				value,
			};
		});
	}
</script>

<UseState {value} onUpdate={handleChange} />

<List
	bind:value
	role={$configurations$.role}
	orientation={$configurations$.orientation}
	type={$configurations$.type}
	itemsRows={$configurations$.itemsRows}
	wrapFocus={$configurations$.wrapFocus}
	dense={$configurations$.dense}
	on:change={handleChange}
>
	{#each $configurations$.items as item, index}
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
