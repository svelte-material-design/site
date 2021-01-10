<script lang="ts">
	import {
		TopAppBar,
		Row,
		Section,
		Title,
		Navigation,
		Icon,
		IconOn,
		IconOff,
		ActionIcon,
		ActionButton,
		ActionIconToggle,
		Label,
		Toolbar,
	} from "@smui/core/top-app-bar";
	import type {
		TopAppBarVariant,
		TopAppBarColor,
	} from "@smui/core/top-app-bar";

	export let variant: TopAppBarVariant = "standard";
	export let color: TopAppBarColor = "primary";
	export let prominent: boolean = false;
	export let dense: boolean = false;
	// let Adjust = FixedAdjust;

	// switch ($page.query.style) {
	// 	case "fixed":
	// 		variant = "fixed";
	// 		title = "Fixed";
	// 		break;
	// 	case "dense":
	// 		dense = true;
	// 		title = "Dense";
	// 		Adjust = DenseFixedAdjust;
	// 		break;
	// 	case "prominent":
	// 		prominent = true;
	// 		title = "Prominent";
	// 		Adjust = ProminentFixedAdjust;
	// 		break;
	// 	case "short":
	// 		variant = "short";
	// 		title = "Short";
	// 		Adjust = ShortFixedAdjust;
	// 		break;
	// 	case "short-closed":
	// 		variant = "short";
	// 		collapsed = true;
	// 		title = "Short";
	// 		Adjust = ShortFixedAdjust;
	// 		break;
	// }
</script>

<style>
	:global(app, body, html) {
		display: block !important;
		height: auto !important;
		width: auto !important;
		position: static !important;
	}
</style>

<svelte:options immutable={true} />

<TopAppBar {variant} {prominent} {dense} {color}>
	<Row>
		<Section>
			<Navigation>
				<Icon>menu</Icon>
			</Navigation>
			<Title>Title</Title>
		</Section>
		<Toolbar>
			<ActionButton>
				<Icon>event</Icon>
				<Label>Button</Label>
			</ActionButton>
			<ActionIconToggle aria-label="Print this page">
				<IconOn>star</IconOn>
				<IconOff>star_border</IconOff>
			</ActionIconToggle>
			<ActionIcon aria-label="Bookmark this page">
				<Icon>bookmark</Icon>
			</ActionIcon>
		</Toolbar>
	</Row>
	{#if prominent}
		<Row>
			<Section>Test</Section>
		</Row>
	{/if}
	<div slot="content">Content</div>
</TopAppBar>
