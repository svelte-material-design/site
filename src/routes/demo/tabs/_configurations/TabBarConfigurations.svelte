<script lang="ts">
	import { IconType } from "src/components/configurator/smui-components/icons";
	import {
		MultipleItemControls,
		Item,
		MultipleItemSelector,
		MultipleItemsConfigurations,
	} from "src/components/configurator/common-options/multiple-items";
	import { TabConfigurations } from "../types";
	import TabConfigurationsComponent from "./TabConfigurations.svelte";

	let active: string = undefined;

	//#region configurations
	export let open: boolean = undefined;
	export let timeoutMs: number = undefined;
	export let stacked: boolean = undefined;
	export let leading: boolean = undefined;
	export let closeOnEscape: boolean = true;

	export let showActionBtn: boolean = undefined;
	export let actionRipple: boolean = undefined;
	export let iconActionType: IconType = undefined;
	export let iconActionRipple: boolean = undefined;
	export let showDismiss: boolean = undefined;
	export let dismissRipple: boolean = undefined;
	//#endregion

	let multipleItemsConfigurations: MultipleItemsConfigurations;
	let tabs: TabProps[] = [];
	let selectedTab: TabProps = {} as TabProps;
	$: selectedTabConfigurations =
		selectedTab.configurations ?? ({} as TabConfigurations);

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

<svelte:options immutable={true} />

<!-- <TabsConfigurations
		bind:open
		bind:timeoutMs
		bind:stacked
		bind:leading
		bind:closeOnEscape
		bind:showActionBtn
		bind:actionRipple
		bind:iconActionType
		bind:iconActionRipple
		bind:showDismiss
		bind:dismissRipple /> -->
<MultipleItemsConfigurations
	bind:this={multipleItemsConfigurations}
	bind:items={tabs}
	bind:selectedItem={selectedTab}>
	<MultipleItemSelector
		items={tabs}
		label="Edit tab"
		selectedItem={selectedTab}
		{multipleItemsConfigurations} />
	<TabConfigurationsComponent
		bind:active={selectedTabConfigurations.active}
		bind:ripple={selectedTabConfigurations.ripple}
		bind:stacked={selectedTabConfigurations.stacked}
		bind:useMinWidth={selectedTabConfigurations.useMinWidth}
		bind:tabIndicatorPosition={selectedTabConfigurations.tabIndicatorPosition}
		bind:leadingIcon={selectedTabConfigurations.leadingIcon}
		bind:trailingIcon={selectedTabConfigurations.trailingIcon}
		on:change={handleTabConfigurationsChange} />
	<MultipleItemControls
		itemFactory={tabFactory}
		{multipleItemsConfigurations} />
</MultipleItemsConfigurations>
