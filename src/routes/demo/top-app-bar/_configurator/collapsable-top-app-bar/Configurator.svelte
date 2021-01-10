<script lang="ts">
	import { Configurator, IFrame } from "src/components/configurator";
	import Configurations from "./Configurations.svelte";
	import type { TopAppBarConfigurations } from "./types";
	import { script, template, scss } from "./code";
	import type {
		TopAppBarVariant,
		TopAppBarColor,
	} from "@smui/core/top-app-bar";

	let variant: TopAppBarVariant = "standard";
	let color: TopAppBarColor = "primary";
	let prominent: boolean = false;
	let dense: boolean = false;

	let cardConfigurations: TopAppBarConfigurations;
	$: cardConfigurations = {
		variant,
		prominent,
		dense,
		color,
	};

	let svelteScriptCode: string;
	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = template(cardConfigurations);
	$: svelteScriptCode = script(cardConfigurations);
	// $: scssCode = scss(cardConfigurations);

	function handleUpdate(props: TopAppBarConfigurations) {
		// open = props.open;
	}
</script>

<style lang="scss">
	.options-sidebar {
		gap: 0 !important;
	}
</style>

<Configurator {svelteScriptCode} {svelteCode} {scssCode}>
	<div slot="preview" style="width: 100%;">
		<IFrame
			src="/iframe/collapsable-top-app-bar"
			title="Top App Bar preview"
			props={cardConfigurations}
			on:update={(e) => handleUpdate(e.detail.props)} />
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations bind:variant bind:prominent bind:dense bind:color />
	</svelte-fragment>
</Configurator>
