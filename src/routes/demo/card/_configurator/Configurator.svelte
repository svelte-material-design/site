<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { Card, AspectRatio } from "@smui/core/card";
	import Body from "./body/Body.svelte";
	import Actions from "./actions/Actions.svelte";
	import Configurations from "./Configurations.svelte";
	import Head from "./head/Head.svelte";
	import { ActionsLayout, CardConfigurations } from "./types";
	import { script, template, scss } from "./code";

	let outlined: boolean = false;

	let showTitle: boolean = false;
	let showSubtitle: boolean = false;
	let showText: boolean = true;

	let showBodyTitle: boolean = false;
	let showBodySubtitle: boolean = false;
	let showBodyText: boolean = false;
	let media: AspectRatio = undefined;
	let showMediaContent: boolean = false;
	let horizontalLayout: boolean = false;
	let clickableBody: boolean = false;
	let primaryActionRipple: boolean = true;

	let actionsLayout: ActionsLayout = undefined;

	let cardConfigurations: CardConfigurations;
	$: cardConfigurations = {
		outlined,
		title: showTitle ? "Head title" : undefined,
		subtitle: showSubtitle ? "Head subtitle" : undefined,
		text: showText ? "Head text" : undefined,
		bodyTitle: showBodyTitle ? "Body title" : undefined,
		bodySubtitle: showBodySubtitle ? "Body subtitle" : undefined,
		bodyText: showBodyText ? "Body text" : undefined,
		media,
		mediaContent: showMediaContent ? "Media content" : undefined,
		horizontalLayout,
		clickableBody,
		primaryActionRipple,
		actionsLayout,
	};

	let svelteScriptCode: string;
	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = template(cardConfigurations);
	$: svelteScriptCode = script(cardConfigurations);
	$: scssCode = scss(cardConfigurations);
</script>

<style lang="scss">
	.options-sidebar {
		gap: 0 !important;
	}
</style>

<Configurator {svelteScriptCode} {svelteCode} {scssCode}>
	<div slot="preview">
		<Card
			variant={outlined ? 'outlined' : undefined}
			style="min-width: {!horizontalLayout ? 350 : 550}px">
			<Head {...cardConfigurations} />
			<Body {...cardConfigurations} />
			<Actions {actionsLayout} />
		</Card>
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations
			bind:outlined
			bind:showTitle
			bind:showSubtitle
			bind:showText
			bind:showBodyTitle
			bind:showBodySubtitle
			bind:showBodyText
			bind:media
			bind:showMediaContent
			bind:horizontalLayout
			bind:clickableBody
			bind:primaryActionRipple
			bind:actionsLayout />
	</svelte-fragment>
</Configurator>
