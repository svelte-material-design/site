<svelte:options immutable={true} />

<script lang="ts">
	import {
		TopAppBar,
		Section,
		Title,
		NavigationIcon,
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
</script>

<TopAppBar {variant} {prominent} {dense} {color}>
	<Section>
		<NavigationIcon>
			<Icon>menu</Icon>
		</NavigationIcon>
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
	<div slot="content" let:className>
		<div class={className} style="height: 200vh;">Content</div>
	</div>
</TopAppBar>

<style>
	:global(app, body, html) {
		display: block !important;
		height: auto !important;
		width: auto !important;
		position: static !important;
	}
</style>
