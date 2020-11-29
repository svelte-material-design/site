<script lang="ts">
	import {
		Configurator,
		generateSvelteCode,
	} from "src/components/configurator";
	import SliderOption from "src/components/configurator/common-options/base/SliderOption.svelte";
	import { List, Item, Text, ListRole, ListOrientation } from "@smui/core/list";
	import MultipleItemControls from "src/components/configurator/common-options/selection-group/MultipleItemControls.svelte";
	import MultipleItemSelector from "src/components/configurator/common-options/selection-group/MultipleItemSelector.svelte";
	import ListItemOptions from "./_ListItemOptions.svelte";
	import ListItem from "./_ListItem.svelte";
	import ListOptions, { ListLayout } from "./_ListOptions.svelte";
	import { IconType } from "src/components/configurator/common-options/IconTypeOption.svelte";
	import { createItemCode } from "./_code";
	import { tick } from "svelte";

	let multipleItemsControls: MultipleItemControls;

	let items: ListItemProps[] = [];
	let selectedItem: ListItemProps = {} as any;
	let selectedItemId: ListItemProps["id"];

	let value: string;
	let role: ListRole;
	let orientation: ListOrientation;
	let highlightSelected: boolean;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "List",
		props: [
			[role, `role="${role}"`],
			[orientation, `orientation="${orientation}"`],
		],
		content: items
			.map((item) =>
				createItemCode({
					ariaLabel: item.ariaLabel,
					disabled: item.disabled,
					label: item.label,
					leadingIcon: item.leadingIcon,
					ripple: item.ripple,
					title: item.title,
					value: item.value,
					selected: item.selected,
				})
			)
			.join("\n"),
	});

	async function handleItemOptionsChange() {
		const oldValue = value;

		multipleItemsControls.updateItemsInstance();

		await tick();

		if (oldValue !== value) {
			multipleItemsControls.updateItemsInstance();
		}
	}

	function createListItem(index) {
		const value = `item:${index}`;
		return {
			id: value,
			value,
			ripple: true,
			highlightSelected: true,
			disabled: false,
			readonly: false,
			selected: false,
			href: undefined,
			label: `Item ${index}`,
			leadingIcon: undefined,
		} as ListItemProps;
	}

	interface ListItemProps {
		id: string;
		name: string;
		value: string;
		ripple: boolean;
		highlightSelected: boolean;
		disabled: boolean;
		readonly: boolean;
		selected: boolean;
		href: string;
		label: string;
		title: string;
		ariaLabel: string;
		leadingIcon: IconType;
	}
</script>

<style lang="scss">
	[slot="preview"] {
		min-height: 10em;
		width: 80%;
	}
</style>

<svelte:options immutable={true} />

<Configurator {svelteCode} {scssCode}>
	<div slot="preview">
		<List bind:value {role} {orientation}>
			{#each items as item}
				<ListItem
					value={item.value}
					disabled={item.disabled}
					ripple={item.ripple}
					bind:selected={item.selected}
					ariaLabel={item.ariaLabel}
					title={item.title}
					label={item.label}
					leadingIcon={item.leadingIcon}
					listRole={role}
					on:change={multipleItemsControls.updateItemsInstance} />
			{/each}
		</List>
	</div>
	<div slot="values">
		<div>
			value:
			{#if Array.isArray(value)}
				[{value}]
			{:else if typeof value === 'string'}"{value}"{:else}{value}{/if}
		</div>
	</div>
	<div slot="optionsSidebar">
		<ListOptions bind:role bind:orientation bind:highlightSelected />
		<MultipleItemSelector label="Selected Item" {items} bind:selectedItemId />
		<ListItemOptions
			listRole={role}
			bind:ripple={selectedItem.ripple}
			bind:disabled={selectedItem.disabled}
			bind:title={selectedItem.title}
			bind:label={selectedItem.label}
			bind:ariaLabel={selectedItem.ariaLabel}
			bind:leadingIcon={selectedItem.leadingIcon}
			bind:selected={selectedItem.selected}
			labelFn={() => `Item ${items.indexOf(selectedItem)}`}
			ariaLabelFn={() => `Item ${items.indexOf(selectedItem)}`}
			titleFn={() => `Title ${items.indexOf(selectedItem)}`}
			on:change={handleItemOptionsChange} />
		<MultipleItemControls
			bind:this={multipleItemsControls}
			bind:items
			bind:selectedItem
			bind:selectedItemId
			itemFactory={createListItem} />
	</div>
</Configurator>
