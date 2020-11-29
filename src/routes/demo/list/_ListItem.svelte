<script lang="ts">
	import { Item, Text, Graphic, ListRole, Icon } from "@smui/core/list";
	import { Radio } from "@smui/core/radio";
	import { Checkbox } from "@smui/core/checkbox";
	import { IconType } from "src/components/configurator/common-options/IconTypeOption.svelte";
	import LeadingIcon from "src/components/configurator/common-options/LeadingIcon.svelte";

	export let value: string;
	export let disabled: boolean;
	export let ripple: boolean;
	export let selected: boolean;
	export let ariaLabel: string;
	export let title: string;
	export let label: string;

	export let leadingIcon: IconType;

	export let listRole: ListRole;
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
	{#if leadingIcon}
		<LeadingIcon type={leadingIcon} component={Icon} />
	{/if}
	{#if listRole === 'radiogroup'}
		<Graphic>
			<Radio checked={selected} />
		</Graphic>
	{:else if listRole === 'group'}
		<Graphic>
			<Checkbox checked={selected} />
		</Graphic>
	{/if}
	{#if label}
		<Text>{label}</Text>
	{/if}
</Item>
