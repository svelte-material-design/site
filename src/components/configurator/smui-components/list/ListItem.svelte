<svelte:options immutable={true} />

<script lang="ts">
	import { Radio, Checkbox } from "@svelte-material-design/core/list";
	import type { ListItemsStyle } from "@svelte-material-design/core/list";
	import { IconButton, Icon } from "@svelte-material-design/core/icon-button";
	import LeadingIcon from "src/components/configurator/smui-components/icons/LeadingIcon.svelte";
	import TrailingIcon from "src/components/configurator/smui-components/icons/TrailingIcon.svelte";
	import type { IconType } from "../icons";
	import { getImageData } from ".";
	import { listRoleToItemRole } from "./code";
	import type { ListRole } from "./types";

	export let component: any;
	export let contentComponent: any;
	export let primaryTextComponent: any;
	export let secondaryTextComponent: any;
	export let iconComponent: any;

	export let value: string = undefined;
	export let disabled: boolean;
	export let ripple: boolean;
	export let selected: boolean = undefined;
	export let label: string;
	export let labelRow2: string;
	export let labelRow3: string;

	export let leadingIcon: IconType;
	export let trailingIcon: IconType;

	export let listRole: ListRole = undefined;
	export let listItemsStyle: ListItemsStyle;
	export let listItemsRows: number;

	export let showCloseBtn: boolean;

	let role = listRoleToItemRole(listRole);

	$: imageData = getImageData(listItemsStyle);
</script>

<svelte:component
	this={component}
	bind:selected
	{value}
	{disabled}
	{ripple}
	{role}
	{...$$restProps}
	on:change
	let:leadingClassName
	let:trailingClassName
>
	{#if listRole === "radiogroup"}
		<Radio class={leadingClassName} />
	{:else if listRole === "group"}
		<Checkbox class={leadingClassName} />
	{/if}
	{#if listItemsStyle === "image" || listItemsStyle === "avatar" || listItemsStyle === "thumbnail" || listItemsStyle === "video"}
		<img
			class={leadingClassName}
			alt={imageData.imageTxt}
			src={imageData.imageSrc}
		/>
	{:else if listItemsStyle === "icon" || listItemsStyle === "textual"}
		<LeadingIcon
			class={leadingClassName}
			type={leadingIcon}
			component={iconComponent}
		/>
	{/if}
	{#if label}
		<svelte:component this={contentComponent}>
			{#if listItemsRows === 1}
				{label}
			{:else if listItemsRows > 1}
				<svelte:component this={primaryTextComponent}>{label}</svelte:component>
				<svelte:component this={secondaryTextComponent}>
					{labelRow2}
				</svelte:component>
			{/if}
			{#if listItemsRows === 3}
				<svelte:component this={secondaryTextComponent}>
					{labelRow3}
				</svelte:component>
			{/if}
		</svelte:component>
	{/if}
	{#if trailingIcon}
		<TrailingIcon
			class={trailingClassName}
			type={trailingIcon}
			component={iconComponent}
		/>
	{/if}
	{#if showCloseBtn}
		<IconButton class={trailingClassName}><Icon>close</Icon></IconButton>
	{/if}
</svelte:component>
