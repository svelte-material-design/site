<svelte:options immutable={true} />

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
	import type { CollapsableTopAppBarConfigurations } from "../types";

	export let configurations: CollapsableTopAppBarConfigurations;

	function handleChange() {
		configurations = { ...configurations };
	}
</script>

<CollapsableTopAppBar
	bind:collapsed={configurations.collapsed}
	prominent={configurations.prominent}
	dense={configurations.dense}
	color={configurations.color}
	alwaysCollapsed={configurations.alwaysCollapsed}
	on:change={handleChange}
>
	<Section>
		<NavigationIcon>
			<Icon>menu</Icon>
		</NavigationIcon>
		<Title>Title</Title>
	</Section>
	<Toolbar>
		{#if !configurations.collapsed}
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
	<div slot="content" let:class={className}>
		<div class={className} style="height: 200vh;">Content</div>
	</div>
</CollapsableTopAppBar>

<style>
	:global(app, body, html) {
		width: auto !important;
		position: static !important;
	}
</style>
