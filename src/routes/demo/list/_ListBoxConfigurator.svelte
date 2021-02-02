<svelte:options immutable={true} />

<script lang="ts">
	import {
		Configurator,
		generateSvelteCode,
	} from "src/components/configurator";
	import {
		ListBox,
		ListOrientation,
		Separator,
		ListType,
	} from "@smui/core/list";
	import {
		MultipleItemsConfigurations,
		MultipleItemControls,
		MultipleItemSelector,
	} from "src/components/configurator/common-options/multiple-items";
	import ListItemOptions from "./_configurator/_ListItemOptions.svelte";
	import ListItem from "./_configurator/_ListItem.svelte";
	import { createItemCode, createSeparatorCode, ListItemProps } from "./_code";
	import { tick } from "svelte";
	import ListBoxOptions from "./_ListBoxOptions.svelte";
	import CommonListOptions from "./_configurator/_CommonListOptions.svelte";
	import CommonListItemOptions from "./_configurator/_CommonListItemOptions.svelte";

	let multipleItemsConfigurations: MultipleItemsConfigurations;

	let items: ListItemProps[] = [];
	let selectedItem: ListItemProps = {} as any;
	let itemsInstance: ListItem[] = [];

	let value: string;
	let multiSelection: boolean;
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
		tag: "ListBox",
		props: [
			"bind:value",
			[orientation, `orientation="${orientation}"`],
			[type, `type="${type}"`],
			[density, `density={${density}}`],
			[dense, `dense`],
			[itemsRows > 1, `itemsRows={${itemsRows}}`],
			[!wrapFocus, `wrapFocus={false}`],
		],
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
					listType: type,
					leadingIcon: item.leadingIcon,
					imageSrc: itemsInstance[index]?.getImageSrc(),
					imageTxt: itemsInstance[index]?.getImageTxt(),
					trailingIcon: item.trailingIcon,
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

		multipleItemsConfigurations.updateSelectedInstance();

		await tick();

		if (oldValue !== value) {
			// TODO: Still needed?
			multipleItemsConfigurations.updateSelectedInstance();
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
			leadingIcon: undefined,
			trailingIcon: undefined,
		} as ListItemProps;
	}
</script>

<Configurator {svelteCode} {scssCode}>
	<div slot="preview">
		<ListBox
			bind:value
			{multiSelection}
			{orientation}
			{type}
			{itemsRows}
			{wrapFocus}
			{dense}
			{density}
		>
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
					listType={type}
					listItemsRows={itemsRows}
					on:change={multipleItemsConfigurations.updateSelectedInstance}
				/>
				{#if index === 0 && separator}
					<Separator
						insetPadding={separatorInsetPadding}
						insetLeading={separatorInsetLeading}
						insetTrailing={separatorInsetTrailing}
					/>
				{/if}
			{/each}
		</ListBox>
	</div>
	<div slot="values">
		<div>
			value:
			{#if Array.isArray(value)}
				[{value}]
			{:else if typeof value === "string"}"{value}"{:else}{value}{/if}
		</div>
	</div>
	<div slot="optionsSidebar">
		<MultipleItemsConfigurations
			bind:this={multipleItemsConfigurations}
			bind:items
			bind:selectedItem
		>
			<ListBoxOptions bind:multiSelection on:change={handleOptionsChange} />
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
				on:change={handleOptionsChange}
			/>
			<MultipleItemSelector
				{items}
				label="Edit tab"
				{selectedItem}
				{multipleItemsConfigurations}
			/>
			<ListItemOptions
				listRole="listbox"
				bind:selected={selectedItem.selected}
				on:change={handleOptionsChange}
			/>
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
				on:change={handleOptionsChange}
			/>
			<MultipleItemControls
				itemFactory={createListItem}
				{multipleItemsConfigurations}
			/>
		</MultipleItemsConfigurations>
	</div>
</Configurator>

<style lang="scss">
	[slot="preview"] {
		min-height: 10em;
		width: 80%;
	}
</style>
