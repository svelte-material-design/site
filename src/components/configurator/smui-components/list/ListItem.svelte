<svelte:options immutable={true} />

<script lang="ts">
	import { Radio, Checkbox } from "@svelte-material-design/core/list";
	import { IconButton, Icon } from "@svelte-material-design/core/icon-button";
	import {
		LeadingIcon,
		TrailingIcon,
	} from "src/components/configurator/smui-components/icons";
	import { getImageData } from ".";
	import { listRoleToItemRole } from "./code";
	import type { ListItemConfigurations, ListConfigurations } from "./types";

	export let component: any;
	export let contentComponent: any;
	export let primaryTextComponent: any;
	export let secondaryTextComponent: any;
	export let iconComponent: any;

	export let listConfigurations: ListConfigurations;
	export let configurations: ListItemConfigurations;

	let role = listRoleToItemRole(listConfigurations.role);

	$: imageData = getImageData(listConfigurations.itemsStyle);

	function handleSelected() {
		configurations = { ...configurations };
	}
</script>

<svelte:component
	this={component}
	bind:selected={configurations.selected}
	value={configurations.value}
	disabled={configurations.disabled}
	ripple={configurations.ripple}
	{role}
	{...$$restProps}
	on:change={handleSelected}
	on:change
	let:leadingClassName
	let:trailingClassName
>
	{#if listConfigurations.role === "radiogroup"}
		<Radio class={leadingClassName} />
	{:else if listConfigurations.role === "group"}
		<Checkbox class={leadingClassName} />
	{/if}
	{#if listConfigurations.itemsStyle === "image" || listConfigurations.itemsStyle === "avatar" || listConfigurations.itemsStyle === "thumbnail" || listConfigurations.itemsStyle === "video"}
		<img
			class={leadingClassName}
			alt={imageData.imageTxt}
			src={imageData.imageSrc}
		/>
	{:else if listConfigurations.itemsStyle === "icon" || listConfigurations.itemsStyle === "textual"}
		<LeadingIcon
			class={configurations.leadingClassName}
			type={configurations.leadingIcon}
			component={iconComponent}
		/>
	{/if}
	<slot />
	{#if configurations.label}
		<svelte:component this={contentComponent}>
			{#if listConfigurations.itemsRows === 1}
				{configurations.label}
			{:else if listConfigurations.itemsRows > 1}
				<svelte:component this={primaryTextComponent}
					>{configurations.label}</svelte:component
				>
				<svelte:component this={secondaryTextComponent}>
					{configurations.labelRow2}
				</svelte:component>
			{/if}
			{#if listConfigurations.itemsRows === 3}
				<svelte:component this={secondaryTextComponent}>
					{configurations.labelRow3}
				</svelte:component>
			{/if}
		</svelte:component>
	{/if}
	{#if configurations.trailingIcon}
		<TrailingIcon
			class={configurations.trailingClassName}
			type={configurations.trailingIcon}
			component={iconComponent}
		/>
	{/if}
	{#if configurations.showCloseBtn}
		<IconButton class={trailingClassName}><Icon>close</Icon></IconButton>
	{/if}
</svelte:component>
