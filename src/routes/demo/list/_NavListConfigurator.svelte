<script lang="ts">
	import {
		Configurator,
		generateSvelteCode,
	} from "src/components/configurator";
	import {
		ListRole,
		ListOrientation,
		Separator,
		ListType,
		ListItemsRows,
	} from "@smui/core/list";
	import { NavList } from "@smui/core/list/nav-list";
	import MultipleItemControls from "src/components/configurator/common-options/selection-group/MultipleItemControls.svelte";
	import MultipleItemSelector from "src/components/configurator/common-options/selection-group/MultipleItemSelector.svelte";
	import CommonListItemOptions from "./_CommonListItemOptions.svelte";
	import { createItemCode, createSeparatorCode } from "./_code";
	import { tick } from "svelte";
	import CommonListOptions from "./_CommonListOptions.svelte";
	import NavListItem, { NavListItemProps } from "./_NavListItem.svelte";
	import NavItemOptions from "./_NavItemOptions.svelte";

	let multipleItemsControls: MultipleItemControls;

	let items: NavListItemProps[] = [];
	let selectedItem: NavListItemProps = {} as any;
	let selectedItemId: NavListItemProps["id"];
	let itemsInstance: NavListItem[] = [];

	let value: string;
	let role: ListRole;
	let wrapFocus: boolean;
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
		tag: "NavList",
		props: [
			[orientation, `orientation="${orientation}"`],
			[type, `type="${type}"`],
			[!wrapFocus, `wrapFocus={false}`],
			[itemsRows > 1, `itemsRows={${itemsRows}}`],
		],
		content: items
			.map((item, index) => {
				let res = createItemCode("NavItem", {
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
					activated: item.activated,
					listItemsRows: itemsRows,
					listRole: role,
					listType: type,
					imageSrc: itemsInstance[index]?.getImageSrc(),
					imageTxt: itemsInstance[index]?.getImageTxt(),
					href: "javascript:void(0);",
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
			highlightSelected: true,
			disabled: false,
			readonly: false,
			activated: false,
			href: undefined,
			label: `Item ${index}`,
			labelRow2: `Secondary text`,
			labelRow3: `Third line`,
			leadingIcon: undefined,
			trailingIcon: undefined,
			clickableLeadingIcon: false,
			clickableTrailingIcon: false,
		} as NavListItemProps;
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
		<NavList {orientation} {type} {itemsRows} {wrapFocus}>
			{#each items as item, index}
				<NavListItem
					bind:this={itemsInstance[index]}
					activated={item.activated}
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
					href="javascript:void(0)" />
				{#if index === 0 && separator}
					<Separator
						insetPadding={separatorInsetPadding}
						insetLeading={separatorInsetLeading}
						insetTrailing={separatorInsetTrailing} />
				{/if}
			{/each}
		</NavList>
	</div>
	<div slot="optionsSidebar">
		<CommonListOptions
			bind:wrapFocus
			bind:orientation
			bind:type
			bind:itemsRows
			bind:separator
			bind:separatorInsetPadding
			bind:separatorInsetLeading
			bind:separatorInsetTrailing
			on:change={handleOptionsChange} />
		<MultipleItemSelector label="Selected Item" {items} bind:selectedItemId />
		<NavItemOptions
			bind:activated={selectedItem.activated}
			on:change={handleOptionsChange} />
		<CommonListItemOptions
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
