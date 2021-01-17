<svelte:options immutable={true} />

<script lang="ts">
	import {
		MenuAnchorCorner,
		MenuVariant,
		MDCMenuDistance,
		MenuOrientation,
		MenuListType,
	} from "@smui/core/menu";
	import { Checkbox } from "@smui/core/checkbox";
	import { Select, Option } from "@smui/core/select";
	import { FormField, Label } from "@smui/core/form-field";
	import { SelectionType } from "@smui/core/common/hoc";
	import CommonListItemOptions from "../list/_configurator/_CommonListItemOptions.svelte";
	import CommonListOptions from "../list/_configurator/_CommonListOptions.svelte";
	import { MenuSurfaceOptions } from "src/components/configurator/smui-components/menu-surface";
	import { IconType } from "src/components/configurator/smui-components/icons";
	import IconTypeOption from "src/components/configurator/smui-components/icons/IconTypeOption.svelte";

	export let selectionType: SelectionType;

	//#region menu surface
	export let anchorCorner: MenuAnchorCorner;
	export let anchorFlipRtl: boolean = true;
	export let quickOpen: boolean;
	export let open: boolean;
	export let variant: MenuVariant;
	export let anchorMargin: MDCMenuDistance;
	//#endregion

	//#region group
	export let showSelectionGroup: boolean;
	export let selectionGroupIcon: IconType;
	//#endregion

	//#region list
	export let wrapFocus: boolean = true;

	export let dense: boolean;
	export let density: number;

	export let orientation: MenuOrientation;
	export let type: MenuListType;
	export let itemsRows: number;

	export let separator: boolean;
	export let separatorInsetPadding: boolean;
	export let separatorInsetLeading: boolean;
	export let separatorInsetTrailing: boolean;
	//#endregion

	//#region item
	export let ripple: boolean = true;
	export let disabled: boolean;
	export let leadingIcon: IconType;
	export let trailingIcon: IconType;
	export let clickableLeadingIcon: boolean;
	export let clickableTrailingIcon: boolean;
	export let useLabel: boolean;
	export let useAriaLabel: boolean;
	export let useTitle: boolean;
	//#endregion
</script>

<div>
	<Select bind:value={selectionType}>
		<span slot="label">Selection Type</span>
		<div slot="options">
			<Option />
			<Option value="single">Single</Option>
			<Option value="multi">Multi</Option>
		</div>
	</Select>
</div>
<MenuSurfaceOptions
	bind:anchorCorner
	bind:anchorFlipRtl
	bind:quickOpen
	bind:open
	bind:variant
	bind:anchorMargin
/>
<div style="grid-column: span 2;">Group Configurations</div>
<div>
	<FormField>
		<Checkbox bind:checked={showSelectionGroup} />
		<Label>Show group</Label>
	</FormField>
</div>
<IconTypeOption
	bind:value={selectionGroupIcon}
	label="Selection Group Icon"
	allowEmpty
	disabled={!showSelectionGroup}
	on:change
/>
<div style="grid-column: span 2;">Menu List Configurations</div>
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
/>
<div style="grid-column: span 2;">Menu Item Configurations</div>
<CommonListItemOptions
	listType={type}
	bind:ripple
	bind:disabled
	bind:useTitle
	bind:useLabel
	bind:useAriaLabel
	bind:leadingIcon
	bind:trailingIcon
	bind:clickableLeadingIcon
	bind:clickableTrailingIcon
/>
