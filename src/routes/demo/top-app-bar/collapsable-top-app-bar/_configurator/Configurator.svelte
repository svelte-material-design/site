<script lang="ts">
	import { Configurator, IFrame } from "src/components/configurator";
	import Configurations from "./Configurations.svelte";
	import type { CollapsableTopAppBarConfigurations } from "./types";
	import { script, template } from "./code";
	import type { TopAppBarColor } from "@smui/core/top-app-bar";

	let collapsed: boolean;

	let color: TopAppBarColor = "primary";
	let prominent: boolean = false;
	let dense: boolean = false;
	let alwaysCollapsed: boolean = false;

	let cardConfigurations: CollapsableTopAppBarConfigurations;
	$: cardConfigurations = {
		prominent,
		dense,
		color,
		alwaysCollapsed,
	};

	let svelteScriptCode: string;
	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = template(cardConfigurations);
	$: svelteScriptCode = script(cardConfigurations);
	// $: scssCode = scss(cardConfigurations);

	function handleUpdate(props: CollapsableTopAppBarConfigurations) {
		collapsed = props.collapsed;
	}
</script>

<style lang="scss">
	.options-sidebar {
		gap: 0 !important;
	}
</style>

<Configurator {svelteScriptCode} {svelteCode} {scssCode}>
	<div slot="preview" style="width: 100%; height: 15em;">
		<IFrame
			title="Collapsable Top App Bar preview"
			props={cardConfigurations}
			on:update={(e) => handleUpdate(e.detail.props)} />
	</div>
	<div slot="values">Collapsed: {collapsed}</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations bind:prominent bind:dense bind:color bind:alwaysCollapsed />
	</svelte-fragment>
</Configurator>
