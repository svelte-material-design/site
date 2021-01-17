<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { MultipleItemsConfigurations } from "src/components/configurator/common-options/multiple-items";
	import Configurations from "./Configurations.svelte";
	import {
		List,
		ListRole,
		ListOrientation,
		Separator,
		ListType,
	} from "@smui/core/list";
	import { ListItemConfigurations } from "./types";
	import ListItem from "./_ListItem.svelte";

	let multipleItemsConfigurations: MultipleItemsConfigurations;

	let items: ListItemConfigurations[] = [];
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

	let svelteScriptCode: string;
	let svelteCode: string;

	// let buttonConfigurations: ButtonConfigurations;
	// $: buttonConfigurations = {
	// 	disabled,
	// 	ripple,
	// 	variant,
	// 	link,
	// 	color,
	// 	iconOnly,
	// 	leadingIcon,
	// 	trailingIcon,
	// 	customStyle,
	// 	accessibleTouch,
	// };

	// $: svelteScriptCode = script(buttonConfigurations);
	// $: svelteCode = template(buttonConfigurations);
</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview">
		{orientation}
		<List
			bind:value
			{role}
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
					listRole={role}
					listType={type}
					listItemsRows={itemsRows}
					on:change={multipleItemsConfigurations &&
						multipleItemsConfigurations.updateSelectedInstance}
				/>
				{#if index === 0 && separator}
					<Separator
						insetPadding={separatorInsetPadding}
						insetLeading={separatorInsetLeading}
						insetTrailing={separatorInsetTrailing}
					/>
				{/if}
			{/each}
		</List>
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations
			bind:items
			bind:multipleItemsConfigurations
			bind:role
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
	</svelte-fragment>
</Configurator>
