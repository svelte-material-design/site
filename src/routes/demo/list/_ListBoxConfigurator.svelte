<script lang="ts">
	import {
		Configurator,
		generateSvelteCode,
	} from "src/components/configurator";
	import { ListBox, ListOrientation, Separator } from "@smui/core/list";
	import MultipleItemControls from "src/components/configurator/common-options/selection-group/MultipleItemControls.svelte";
	import MultipleItemSelector from "src/components/configurator/common-options/selection-group/MultipleItemSelector.svelte";
	import ListItemOptions from "./_ListItemOptions.svelte";
	import ListItem from "./_ListItem.svelte";
	import { IconType } from "src/components/configurator/common-options/IconTypeOption.svelte";
	import { createItemCode } from "./_code";
	import { tick } from "svelte";
	import ListBoxOptions from "./_ListBoxOptions.svelte";
	import CommonListOptions from "./_CommonListOptions.svelte";

	let multipleItemsControls: MultipleItemControls;

	let items: ListItemProps[] = [];
	let selectedItem: ListItemProps = {} as any;
	let selectedItemId: ListItemProps["id"];

	let value: string;
	let multiSelection: boolean;
	let orientation: ListOrientation;
	let separator: boolean;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "List",
		props: [
			[multiSelection, `multiSelection`],
			[orientation, `orientation="${orientation}"`],
		],
		content: items
			.map((item, index) => {
				let res = createItemCode({
					ariaLabel: item.ariaLabel,
					disabled: item.disabled,
					label: item.label,
					leadingIcon: item.leadingIcon,
					ripple: item.ripple,
					title: item.title,
					value: item.value,
					selected: item.selected,
				});

				if (index === 0 && separator) {
					res += "\n";
					res += `<Separator />`;
				}

				return res;
			})
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
		<ListBox bind:value {multiSelection} {orientation}>
			{#each items as item, index}
				<ListItem
					value={item.value}
					disabled={item.disabled}
					ripple={item.ripple}
					bind:selected={item.selected}
					ariaLabel={item.ariaLabel}
					title={item.title}
					label={item.label}
					leadingIcon={item.leadingIcon}
					listRole="listbox"
					on:change={multipleItemsControls.updateItemsInstance} />
				{#if index === 0 && separator}
					<Separator />
				{/if}
			{/each}
		</ListBox>
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
		<ListBoxOptions bind:multiSelection />
		<CommonListOptions bind:orientation bind:separator />
		<MultipleItemSelector label="Selected Item" {items} bind:selectedItemId />
		<ListItemOptions
			listRole="listbox"
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
