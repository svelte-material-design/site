<script lang="ts">
	import { TabBar } from "@smui/core/tab-bar";
	import { TabConfigurations } from "../types";
	import Tab from "./Tab.svelte";
	import type { TabIndicatorTransition } from "@smui/core/tab-bar";

	export let active: string = undefined;
	export let focusOnActivate: boolean;
	export let activateOnKeyboardNavigation: boolean;
	export let transition: TabIndicatorTransition;
	export let tabs: TabConfigurations[] = [];
</script>

<svelte:options immutable={true} />

<TabBar
	bind:active
	{focusOnActivate}
	{activateOnKeyboardNavigation}
	{transition}
	on:change>
	{#each tabs as tab}
		<Tab {...tab} bind:active={tab.active} />
	{/each}
</TabBar>
