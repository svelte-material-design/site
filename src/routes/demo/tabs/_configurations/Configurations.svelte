<svelte:options immutable={true} />

<script lang="ts">
	import {
		MultipleItemControls,
		Item,
		MultipleItemSelector,
		MultipleItemsConfigurations,
	} from "src/components/configurator/common-options/multiple-items";
	import { TabConfigurations } from "../types";
	import TabConfigurationsComponent from "./TabConfigurations.svelte";
	import TabBarConfigurations from "./TabBarConfigurations.svelte";
	import type { TabIndicatorTransition } from "@smui/core/tab-bar";

	let active: string = undefined;

	//#region configurations
	export let focusOnActivate: boolean;
	export let activateOnKeyboardNavigation: boolean;
	export let transition: TabIndicatorTransition;
	//#endregion

	export let multipleItemsConfigurations: MultipleItemsConfigurations;
	let tabs: TabProps[] = [];
	let selectedTab: TabProps = {} as TabProps;
	let selectedTabConfigurations: TabConfigurations;
	$: {
		if (selectedTab) {
			selectedTabConfigurations = { ...selectedTab.configurations };
			selectedTab.configurations = selectedTabConfigurations;
		} else {
			selectedTabConfigurations = {} as TabConfigurations;
		}
	}

	export let tabsConfigurations: TabConfigurations[] = [];
	$: tabsConfigurations = tabs.map((tab) => tab.configurations);

	function tabFactory(index: number) {
		const id = `tab:${index + 1}`;
		const label = `Tab ${index + 1}`;
		return {
			label,
			configurations: {
				active: false,
				key: id,
				leadingIcon: undefined,
				ripple: true,
				stacked: false,
				tabIndicatorPosition: "label",
				trailingIcon: undefined,
				useMinWidth: false,
				label,
			},
		} as TabProps;
	}

	function handleTabConfigurationsChange() {
		multipleItemsConfigurations.updateSelectedInstance();
	}

	interface TabProps extends Item {
		configurations: TabConfigurations;
	}
</script>

<TabBarConfigurations
	bind:focusOnActivate
	bind:activateOnKeyboardNavigation
	bind:transition
/>
<MultipleItemsConfigurations
	bind:this={multipleItemsConfigurations}
	bind:items={tabs}
	bind:selectedItem={selectedTab}
>
	<MultipleItemSelector
		items={tabs}
		label="Edit tab"
		selectedItem={selectedTab}
		{multipleItemsConfigurations}
	/>
	<TabConfigurationsComponent
		bind:active={selectedTabConfigurations.active}
		bind:ripple={selectedTabConfigurations.ripple}
		bind:stacked={selectedTabConfigurations.stacked}
		bind:useMinWidth={selectedTabConfigurations.useMinWidth}
		bind:tabIndicatorPosition={selectedTabConfigurations.tabIndicatorPosition}
		bind:leadingIcon={selectedTabConfigurations.leadingIcon}
		bind:trailingIcon={selectedTabConfigurations.trailingIcon}
		on:change={handleTabConfigurationsChange}
	/>
	<MultipleItemControls
		itemFactory={tabFactory}
		{multipleItemsConfigurations}
	/>
</MultipleItemsConfigurations>
