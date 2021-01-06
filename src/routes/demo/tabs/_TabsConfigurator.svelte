<script lang="ts">
	import { Configurator, IFrame } from "src/components/configurator";
	import Configurations from "./_configurations/Configurations.svelte";
	import { script, template } from "./code";
	import TabBarPreview from "./_preview/TabBar.svelte";
	import { TabConfigurations } from "./types";
	import { MultipleItemsConfigurations } from "src/components/configurator/common-options/multiple-items";
	import type { TabIndicatorTransition } from "@smui/core/tab-bar";

	let active: string = undefined;

	//#region configurations
	export let focusOnActivate: boolean;
	export let activateOnKeyboardNavigation: boolean;
	export let transition: TabIndicatorTransition;
	//#endregion

	let multipleItemsConfigurations: MultipleItemsConfigurations;

	let tabs: TabConfigurations[] = [];

	//#region code
	let svelteCode: string = "test";
	let scssCode: string = "";

	$: svelteCode = template(
		{
			focusOnActivate,
			activateOnKeyboardNavigation,
			transition,
		},
		tabs
	);
	//#endregion

	function handleTabChange(props) {
		multipleItemsConfigurations.updateSelectedInstance();
	}
</script>

<svelte:options immutable={true} />

<div class="configurator">
	<Configurator svelteScriptCode={script} {svelteCode} {scssCode}>
		<svelte-fragment slot="preview">
			<TabBarPreview
				bind:active
				{tabs}
				{focusOnActivate}
				{activateOnKeyboardNavigation}
				{transition}
				on:change={handleTabChange} />
		</svelte-fragment>
		<div slot="optionsSidebar">
			<Configurations
				bind:focusOnActivate
				bind:activateOnKeyboardNavigation
				bind:transition
				bind:tabsConfigurations={tabs}
				bind:multipleItemsConfigurations />
		</div>
	</Configurator>
</div>
