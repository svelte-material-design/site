<script lang="ts">
	import {
		Configurator,
		generateSvelteCode,
	} from "src/components/configurator";
	import {
		List,
		ListRole,
		ListOrientation,
		Separator,
		ListType,
		Item,
	} from "@smui/core/list";
	import MultipleItemControls from "src/components/configurator/common-options/multiple-items/MultipleItemControls.svelte";
	import MultipleItemSelector from "src/components/configurator/common-options/multiple-items/MultipleItemSelector.svelte";
	import ListItemOptions from "./_ListItemOptions.svelte";
	import ListItem from "./_ListItem.svelte";
	import ListOptions from "./_ListOptions.svelte";
	import { createItemCode, createSeparatorCode, ListItemProps } from "./_code";
	import { tick } from "svelte";
	import CommonListOptions from "./_CommonListOptions.svelte";
	import CommonListItemOptions from "./_CommonListItemOptions.svelte";
	import {
		getProps as getListCodeProps,
		ItemCodeProps,
	} from "src/components/configurator/smui-components/list";

	let multipleItemsControls: MultipleItemControls;

	let items: ListItemProps[] = [];
	let selectedItem: ListItemProps = {} as any;
	let selectedItemId: ListItemProps["id"];
	let itemsInstance: ListItem[] = [];

	let value: string;
	let role: ListRole;
	let wrapFocus: boolean = true;

	let dense: boolean;
	let density: number;

	let orientation: ListOrientation;
	let type: ListType;
	let itemsRows: number;

	let separator: boolean;
	let separatorInsetPadding: boolean;
	let separatorInsetLeading: boolean;
	let separatorInsetTrailing: boolean;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "List",
		props: getListCodeProps({
			role,
			orientation,
			type,
			density,
			dense,
			itemsRows,
			wrapFocus,
		}),
		content: items
			.map((item, index) => {
				let res = createItemCode("Item", {
					ariaLabel: item.ariaLabel,
					disabled: item.disabled,
					label: item.label,
					labelRow2: item.labelRow2,
					labelRow3: item.labelRow3,
					ripple: item.ripple,
					title: item.title,
					value: item.value,
					selected: item.selected,
					listItemsRows: itemsRows,
					listRole: role,
					listType: type,
					clickableLeadingIcon: item.clickableLeadingIcon,
					leadingIcon: item.leadingIcon,
					imageSrc: itemsInstance[index]?.getImageSrc(),
					imageTxt: itemsInstance[index]?.getImageTxt(),
					trailingIcon: item.trailingIcon,
					clickableTrailingIcon: item.clickableTrailingIcon,
				});

				if (index === 0 && separator) {
					res += "\n";
					res += createSeparatorCode({
						insetLeading: separatorInsetLeading,
						insetPadding: separatorInsetPadding,
						insetTrailing: separatorInsetTrailing,
					});
				}

				return res;
			})
			.join("\n"),
	});

	async function handleOptionsChange() {
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
			labelRow2: `Secondary text`,
			labelRow3: `Third line`,
			trailingIcon: undefined,
			clickableLeadingIcon: false,
			clickableTrailingIcon: false,
			leadingIcon: undefined,
		} as ListItemProps;
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
		<List
			bind:value
			{role}
			{orientation}
			{type}
			{itemsRows}
			{wrapFocus}
			{dense}
			{density}>
			{#each items as item, index}
				<ListItem
					bind:this={itemsInstance[index]}
					bind:selected={item.selected}
					value={item.value}
					disabled={item.disabled}
					ripple={item.ripple}
					ariaLabel={item.ariaLabel}
					title={item.title}
					label={item.label}
					labelRow2={item.labelRow2}
					labelRow3={item.labelRow3}
					leadingIcon={item.leadingIcon}
					trailingIcon={item.trailingIcon}
					clickableLeadingIcon={item.clickableLeadingIcon}
					clickableTrailingIcon={item.clickableTrailingIcon}
					listRole={role}
					listType={type}
					listItemsRows={itemsRows}
					on:change={multipleItemsControls.updateItemsInstance} />
				{#if index === 0 && separator}
					<Separator
						insetPadding={separatorInsetPadding}
						insetLeading={separatorInsetLeading}
						insetTrailing={separatorInsetTrailing} />
				{/if}
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
		<ListOptions bind:role {type} on:change={handleOptionsChange} />
		<CommonListOptions
			bind:wrapFocus
			bind:dense
			bind:density
			bind:orientation
			bind:type
			bind:itemsRows
			bind:separator
			bind:separatorInsetPadding
			bind:separatorInsetLeading
			bind:separatorInsetTrailing
			on:change={handleOptionsChange} />
		<MultipleItemSelector label="Selected Item" {items} bind:selectedItemId />
		<ListItemOptions
			listRole={role}
			bind:selected={selectedItem.selected}
			on:change={handleOptionsChange} />
		<CommonListItemOptions
			listType={type}
			bind:ripple={selectedItem.ripple}
			bind:disabled={selectedItem.disabled}
			bind:title={selectedItem.title}
			bind:label={selectedItem.label}
			bind:ariaLabel={selectedItem.ariaLabel}
			bind:leadingIcon={selectedItem.leadingIcon}
			bind:trailingIcon={selectedItem.trailingIcon}
			bind:clickableLeadingIcon={selectedItem.clickableLeadingIcon}
			bind:clickableTrailingIcon={selectedItem.clickableTrailingIcon}
			labelFn={() => `Item ${items.indexOf(selectedItem)}`}
			ariaLabelFn={() => `Item ${items.indexOf(selectedItem)}`}
			titleFn={() => `Title ${items.indexOf(selectedItem)}`}
			on:change={handleOptionsChange} />
		<MultipleItemControls
			bind:this={multipleItemsControls}
			bind:items
			bind:selectedItem
			bind:selectedItemId
			itemFactory={createListItem} />
	</div>
</Configurator>
