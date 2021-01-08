<script lang="ts">
	import {
		Configurator,
		generateSvelteCode,
	} from "src/components/configurator";
	import { Card, AspectRatio } from "@smui/core/card";
	import UseCardCode from "../UseCardCode.svelte";
	import UseCardStyleCode from "../UseCardStyleCode.svelte";
	import { StringListToFilter } from "@smui/core/common/functions";
	import Body from "./body/Body.svelte";
	import Actions from "./actions/Actions.svelte";
	import Configurations from "./Configurations.svelte";
	import Head from "./head/Head.svelte";
	import { ActionsLayout } from "./types";

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

	let actionsLayout: ActionsLayout = undefined;

	let svelteCode: string;
	let svelteContentCode: string;
	$: svelteCode = generateSvelteCode({
		tag: "Card",
		props: props(outlined, horizontalLayout),
		content: svelteContentCode,
	});

	let scssCode: string;

	function props(
		outlinedValue: typeof outlined,
		horizontalLayoutValue: typeof horizontalLayout
	): StringListToFilter {
		return [
			`style="min-width: ${!horizontalLayoutValue ? 350 : 550}px"`,
			[outlinedValue, `variant="outlined"`],
		];
	}
</script>

<style lang="scss">
	.options-sidebar {
		gap: 0 !important;
	}
</style>

<UseCardCode
	bind:svelteContentCode
	{showTitle}
	{showText}
	{showSubtitle}
	{media}
	{showMediaContent}
	{showBodyTitle}
	{showBodyText}
	{showBodySubtitle}
	{horizontalLayout}
	{clickableBody}
	{actionsLayout} />

<UseCardStyleCode bind:styleCode={scssCode} {media} {horizontalLayout} />

<Configurator {svelteCode} {scssCode}>
	<div slot="preview">
		<Card
			variant={outlined ? 'outlined' : undefined}
			style="min-width: {!horizontalLayout ? 350 : 550}px">
			<Head {showTitle} {showSubtitle} {showText} />
			<Body
				{showBodyTitle}
				{showBodySubtitle}
				{showBodyText}
				{media}
				{showMediaContent}
				{horizontalLayout}
				{clickableBody} />
			<Actions {actionsLayout} />
		</Card>
	</div>
	<div slot="optionsSidebar" class="options-sidebar">
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
			bind:actionsLayout />
	</div>
</Configurator>
