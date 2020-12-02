<script lang="ts">
	import {
		Item,
		Text,
		ListRole,
		LeadingIcon as ListItemLeadingIcon,
		TrailingIcon as ListItemTrailingIcon,
		LeadingContent,
		ListType,
	} from "@smui/core/list";
	import { Radio } from "@smui/core/radio";
	import { Checkbox } from "@smui/core/checkbox";
	import { IconType } from "src/components/configurator/common-options/icons/IconTypeOption.svelte";
	import LeadingIcon from "src/components/configurator/common-options/icons/LeadingIcon.svelte";
	import TrailingIcon from "src/components/configurator/common-options/icons/TrailingIcon.svelte";

	export let value: string;
	export let disabled: boolean;
	export let ripple: boolean;
	export let selected: boolean;
	export let ariaLabel: string;
	export let title: string;
	export let label: string;

	export let leadingIcon: IconType;
	export let trailingIcon: IconType;
	export let clickableLeadingIcon: boolean;
	export let clickableTrailingIcon: boolean;

	export let listRole: ListRole | "listbox";

	export let listType: ListType;
</script>

<svelte:options immutable={true} />

<Item
	{value}
	{disabled}
	{ripple}
	bind:selected
	{ariaLabel}
	{title}
	let:selected
	on:change>
	<slot name="leading" slot="leading" />
	{#if !$$slots.leading}
		{#if leadingIcon}
			<LeadingContent>
				<LeadingIcon
					type={leadingIcon}
					component={ListItemLeadingIcon}
					button={clickableLeadingIcon} />
			</LeadingContent>
		{/if}
	{/if}
	{#if label}
		<Text>{label}</Text>
	{/if}
	{#if trailingIcon}
		<TrailingIcon
			type={trailingIcon}
			component={ListItemTrailingIcon}
			button={clickableTrailingIcon} />
	{/if}
	<slot name="trailing" slot="trailing" />
</Item>
