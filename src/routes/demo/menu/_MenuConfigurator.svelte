<svelte:options immutable={true} />

<script lang="ts">
	import {
		Configurator,
		generateSvelteCode,
		generateSvelteTagCode,
		TagCodeGenerationProps,
	} from "src/components/configurator";
	import MenuOptions from "./_MenuOptions.svelte";
	import { Button } from "@smui/core/button";
	import { Menu, Item } from "@smui/core/menu";
	import { SelectionType } from "@smui/core/common/hoc";
	import {
		MenuAnchorCorner,
		MenuVariant,
		MDCMenuDistance,
		MenuOrientation,
		MenuListType,
		Separator,
		SelectionGroup,
		SelectionGroupIcon,
	} from "@smui/core/menu";
	import MenuItem from "./_MenuItem.svelte";
	import type { IconType } from "src/components/configurator/smui-components/icons";
	import {
		getProps as getMenuSurfaceCodeProps,
		CodeProps as MenuSurfaceCodeProps,
	} from "src/components/configurator/smui-components/menu-surface/code";
	import {
		getProps as getListCodeProps,
		CodeProps as ListCodeProps,
		getItemProps,
		ItemCodeProps,
		createItemCode,
	} from "src/components/configurator/smui-components/list";
	import { LeadingIcon } from "src/components/configurator/smui-components/icons";

	export let selectionType: SelectionType;

	//#region menu surface configurations
	let anchorCorner: MenuAnchorCorner;
	let anchorFlipRtl: boolean;
	let quickOpen: boolean;
	let open: boolean;
	let variant: MenuVariant;

	let anchorMargin: MDCMenuDistance;
	//#endregion

	//#region group
	let showSelectionGroup: boolean;
	let selectionGroupIcon: IconType;
	//#endregion

	//#region list cnfigurations
	let wrapFocus: boolean = true;

	let dense: boolean;
	let density: number;

	let orientation: MenuOrientation;
	let type: MenuListType;
	let itemsRows: number;

	let separator: boolean;
	let separatorInsetPadding: boolean;
	let separatorInsetLeading: boolean;
	let separatorInsetTrailing: boolean;
	//#endregion

	//#region list item configurations
	let ripple: boolean = true;
	let disabled: boolean;
	let leadingIcon: IconType;
	let trailingIcon: IconType;
	let useLabel: boolean = true;
	let useAriaLabel: boolean;
	let useTitle: boolean;
	//#endregion

	let value: any;

	//#region code
	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "div",
		content: `
			<Button on:click={openMenuSurface}>Open Menu</Button>
			${getMenuCode({
				anchorCorner,
				anchorFlipRtl,
				quickOpen,
				open,
				variant,
				anchorMargin,
				dense,
				density,
				itemsRows,
				orientation,
				type,
				wrapFocus,
				ripple,
				disabled,
				leadingIcon,
				trailingIcon,
				clickableLeadingIcon,
				clickableTrailingIcon,
				showSelectionGroup,
				selectionGroupIcon,
			})}
		`,
	});

	function getMenuCode(
		props: MenuSurfaceCodeProps &
			ListCodeProps &
			ItemCodeProps &
			SelectionGroupCodeProps
	) {
		return generateSvelteTagCode({
			tag: "Menu",
			props: getMenuSurfaceCodeProps(props).concat(getListCodeProps(props)),
			content: `
				${getMenuItemCode(
					{ indentSize: 4 },
					{
						ripple,
						disabled,
						leadingIcon,
						trailingIcon,
						label: useLabel ? "Item" : undefined,
						ariaLabel: useAriaLabel ? "Item" : undefined,
						title: useTitle ? "Item" : undefined,
						value: "item 1",
						labelRow2: "Label row 2",
						labelRow3: "Label row 3",
						listItemsRows: itemsRows,
					}
				)}
				${getMenuItemCode(
					{ indentSize: 4 },
					{
						label: "Item 2",
						value: "item:2",
						listItemsRows: 1,
					}
				)}
				${getMenuItemCode(
					{ indentSize: 4 },
					{
						label: "Item 3",
						value: "item:3",
						listItemsRows: 1,
					}
				)}
				${showSelectionGroup}
				${getSelectionGroupCode({
					showSelectionGroup,
					selectionGroupIcon,
				})}
			`,
			indentSize: 3,
			indentFirstLine: false,
		});
	}

	function getMenuItemCode(
		options: Partial<TagCodeGenerationProps>,
		props: ItemCodeProps
	) {
		return createItemCode(
			{
				...options,
				tag: "Item",
				indentFirstLine: false,
			},
			props
		);
	}

	function getSelectionGroupCode(props: SelectionGroupCodeProps) {
		if (showSelectionGroup) {
			return `
				<SelectionGroup>
					${getMenuItemCode(
						{ indentSize: 5 },
						{
							value: "item:4",
							label: "Item 4",
							leadingIcon: selectionGroupIcon,
							listItemsRows: 1,
							leadingIconTag: "SelectionGroupIcon",
						}
					)}
					<Item value="5">Item 5</Item>
				</SelectionGroup>
			`;
		} else {
			return "";
		}
	}
	//#endregion

	function openMenu() {
		open = true;
	}

	interface SelectionGroupCodeProps {
		selectionGroupIcon: IconType;
		showSelectionGroup: boolean;
	}
</script>

<div class="configurator">
	<Configurator {svelteCode} {scssCode}>
		<svelte-fragment slot="preview" let:class={baseClass}>
			<div class="{baseClass} preview">
				<div class="anchor">
					<Button on:click={openMenu}>Open Menu</Button>
					<Menu
						bind:open
						bind:value
						{selectionType}
						{anchorCorner}
						{anchorFlipRtl}
						{quickOpen}
						{variant}
						{anchorMargin}
						{wrapFocus}
						{dense}
						{density}
						{orientation}
						{type}
						{itemsRows}
					>
						<MenuItem
							value="1"
							{ripple}
							{disabled}
							{leadingIcon}
							{trailingIcon}
							{clickableLeadingIcon}
							{clickableTrailingIcon}
							label={useLabel ? "Item 1" : ""}
							labelRow2="Label row 2"
							labelRow3="Label row 3"
							ariaLabel={useAriaLabel ? "Item 1" : ""}
							title={useTitle ? "Item 1" : ""}
							listItemsRows={itemsRows}
							listType={type}
						/>
						{#if separator}
							<Separator
								insetPadding={separatorInsetPadding}
								insetLeading={separatorInsetLeading}
								insetTrailing={separatorInsetTrailing}
							/>
						{/if}
						<Item value="2">Item 2</Item>
						<Item value="3">Item 3</Item>
						{#if showSelectionGroup}
							<SelectionGroup>
								<Item value="4">
									<svelte-fragment slot="leading">
										<LeadingIcon
											component={SelectionGroupIcon}
											type={selectionGroupIcon}
										/>
									</svelte-fragment>
									Item 4
								</Item>
								<Item value="5">Item 5</Item>
							</SelectionGroup>
						{/if}
					</Menu>
				</div>
			</div>
		</svelte-fragment>
		<div slot="values">{value}</div>
		<div slot="optionsSidebar">
			<MenuOptions
				bind:anchorCorner
				bind:anchorFlipRtl
				bind:quickOpen
				bind:open
				bind:variant
				bind:anchorMargin
				bind:showSelectionGroup
				bind:selectionGroupIcon
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
				bind:ripple
				bind:disabled
				bind:leadingIcon
				bind:trailingIcon
				bind:useLabel
				bind:useAriaLabel
				bind:useTitle
				bind:selectionType
			/>
		</div>
	</Configurator>
</div>

<style lang="scss">
	.configurator {
		.preview {
			min-height: 10em;
			width: 80%;
			justify-content: flex-start;
		}

		.surface {
			margin: 1em;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
		}

		.anchor {
			width: 16em;
		}
	}
</style>
