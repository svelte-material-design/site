<svelte:options immutable={true} />

<script lang="ts">
	import {
		Drawer,
		AppContent,
		Content,
		Title,
		Subtitle,
		Header,
		NavList,
		NavItem,
	} from "@svelte-material-design/core/drawer";
	import {
		TopAppBar,
		Title as TopAppBarTitle,
		Section,
	} from "@svelte-material-design/core/top-app-bar";
	import { Content as ListItemContent } from "@svelte-material-design/core/list";
	import type { DrawerConfigurations } from "../types";

	export let configurations: DrawerConfigurations | any;
</script>

{#if configurations.layout === "below-top-app-bar"}
	<TopAppBar class="top-app-bar" style="z-index: 7;">
		<Section>
			<TopAppBarTitle>Top App Bar</TopAppBarTitle>
		</Section>
	</TopAppBar>
{/if}

{#key configurations.layout}
	<Drawer variant={configurations.variant} bind:open={configurations.open}>
		{#if configurations.title}
			<Header>
				<Title>Title</Title>
				{#if configurations.subtitle}
					<Subtitle>Subtitle</Subtitle>
				{/if}
			</Header>
		{/if}
		<Content>
			<NavList>
				<NavItem href="javascript:void(0)">
					<ListItemContent>Gray Kittens</ListItemContent>
				</NavItem>
				<NavItem href="javascript:void(0)">
					<ListItemContent>A Space Rocket</ListItemContent>
				</NavItem>
				<NavItem href="javascript:void(0)">
					<ListItemContent>100 Pounds of Gravel</ListItemContent>
				</NavItem>
				<NavItem href="javascript:void(0)">
					<ListItemContent>All of the Shrimp</ListItemContent>
				</NavItem>
				<NavItem href="javascript:void(0)">
					<ListItemContent>A Planet with a Mall</ListItemContent>
				</NavItem>
			</NavList>
		</Content>
	</Drawer>
{/key}

<AppContent class={"app-content"}>
	<div slot="topAppBar">
		{#if configurations.layout === "full-height"}
			<TopAppBar class="top-app-bar">
				<Section>
					<TopAppBarTitle>Top App Bar</TopAppBarTitle>
				</Section>
			</TopAppBar>
		{/if}
	</div>
	App Content
</AppContent>

<style>
	:global(app, body, html) {
		display: block !important;
		height: auto !important;
		width: auto !important;
		position: static !important;
	}
</style>
