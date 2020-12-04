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
		ListItemsRows,
	} from "@smui/core/list";
	import MultipleItemControls from "src/components/configurator/common-options/selection-group/MultipleItemControls.svelte";
	import MultipleItemSelector from "src/components/configurator/common-options/selection-group/MultipleItemSelector.svelte";
	import ListItemOptions from "./_ListItemOptions.svelte";
	import ListItem from "./_ListItem.svelte";
	import ListOptions from "./_ListOptions.svelte";
	import { IconType } from "src/components/configurator/common-options/icons/IconTypeOption.svelte";
	import { createItemCode, createSeparatorCode } from "./_code";
	import { tick } from "svelte";
	import CommonListOptions from "./_CommonListOptions.svelte";

	let multipleItemsControls: MultipleItemControls;

	let items: ListItemProps[] = [];
	let selectedItem: ListItemProps = {} as any;
	let selectedItemId: ListItemProps["id"];
	let itemsInstance: ListItem[] = [];

	let value: string;
	let role: ListRole;
	let orientation: ListOrientation;
	let type: ListType;
	let itemsRows: ListItemsRows;

	let separator: boolean;
	let separatorInsetPadding: boolean;
	let separatorInsetLeading: boolean;
	let separatorInsetTrailing: boolean;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "List",
		props: [
			"bind:value",
			[role, `role="${role}"`],
			[orientation, `orientation="${orientation}"`],
			[type, `type="${type}"`],
			[itemsRows > 1, `itemsRows={${itemsRows}}`],
		],
		content: items
			.map((item, index) => {
				let res = createItemCode({
					ariaLabel: item.ariaLabel,
					disabled: item.disabled,
					label: item.label,
					labelRow2: item.labelRow2,
					labelRow3: item.labelRow3,
					leadingIcon: item.leadingIcon,
					trailingIcon: item.trailingIcon,
					clickableLeadingIcon: item.clickableLeadingIcon,
					clickableTrailingIcon: item.clickableTrailingIcon,
					ripple: item.ripple,
					title: item.title,
					value: item.value,
					selected: item.selected,
					listItemsRows: itemsRows,
					listRole: role,
					listType: type,
					imageSrc: itemsInstance[index]?.getImageSrc(),
					imageTxt: itemsInstance[index]?.getImageTxt(),
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

	async function getSvelteCode() {}

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
			highlightSelected: true,
			disabled: false,
			readonly: false,
			selected: false,
			href: undefined,
			label: `Item ${index}`,
			labelRow2: `Secondary text`,
			labelRow3: `Third line`,
			leadingIcon: undefined,
			trailingIcon: undefined,
			clickableLeadingIcon: false,
			clickableTrailingIcon: false,
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
		labelRow2: string;
		labelRow3: string;
		title: string;
		ariaLabel: string;
		leadingIcon: IconType;
		trailingIcon: IconType;
		clickableLeadingIcon: boolean;
		clickableTrailingIcon: boolean;
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
		<List bind:value {role} {orientation} {type} {itemsRows}>
			{#each items as item, index}
				<ListItem
					bind:this={itemsInstance[index]}
					value={item.value}
					disabled={item.disabled}
					ripple={item.ripple}
					bind:selected={item.selected}
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
			bind:selected={selectedItem.selected}
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
