<script lang="ts">
	import {
		CollapsableTopAppBar,
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
	import type { TopAppBarColor } from "@smui/core/top-app-bar";

	export let collapsed: boolean;

	export let color: TopAppBarColor = "primary";
	export let prominent: boolean = false;
	export let dense: boolean = false;
	export let alwaysCollapsed: boolean = false;
</script>

<style>
	:global(app, body, html) {
		width: auto !important;
		position: static !important;
	}
</style>

<svelte:options immutable={true} />

<CollapsableTopAppBar
	bind:collapsed
	{prominent}
	{dense}
	{color}
	{alwaysCollapsed}>
	<Section>
		<NavigationIcon>
			<Icon>menu</Icon>
		</NavigationIcon>
		<Title>Title</Title>
	</Section>
	<Toolbar>
		{#if !collapsed}
			<ActionButton>
				<Icon>event</Icon>
				<Label>Button</Label>
			</ActionButton>
			<ActionIconToggle aria-label="Print this page">
				<IconOn>star</IconOn>
				<IconOff>star_border</IconOff>
			</ActionIconToggle>
		{/if}
		<ActionIcon aria-label="Bookmark this page">
			<Icon>bookmark</Icon>
		</ActionIcon>
	</Toolbar>
	<div slot="content" style="height: 200vh;">Content</div>
</CollapsableTopAppBar>
