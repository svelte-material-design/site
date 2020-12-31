<script lang="ts">
	import {
		Tab,
		Label,
		Content,
		TabIndicator,
		Icon as TabIcon,
	} from "@smui/core/tab-bar";
	import {
		IconType,
		Icon,
	} from "src/components/configurator/smui-components/icons";
	import { TabIndicatorPosition } from "../types";

	export let tabIndicatorPosition: TabIndicatorPosition = undefined;
	export let trailingIcon: IconType = undefined;
	export let leadingIcon: IconType = undefined;

	export let active: boolean = undefined;
	export let key: string = undefined;
	export let ripple: boolean = undefined;
	export let stacked: boolean = undefined;
	export let useMinWidth: boolean = undefined;

	export let label: string;
</script>

<svelte:options immutable={true} />

<Tab bind:active {key} {ripple} {stacked} {useMinWidth} on:selected>
	<Content>
		{#if leadingIcon}
			<Icon type={leadingIcon} component={TabIcon} />
		{/if}
		<Label>{label}</Label>
		{#if trailingIcon}
			<Icon type={trailingIcon} component={TabIcon} />
		{/if}
		{#if tabIndicatorPosition === 'label'}
			<TabIndicator />
		{/if}
	</Content>
	{#if tabIndicatorPosition === 'tab'}
		<TabIndicator />
	{/if}
</Tab>
