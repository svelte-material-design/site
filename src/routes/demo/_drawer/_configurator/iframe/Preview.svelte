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
		NavItemContent,
		PrimaryText,
		SecondaryText,
		NavItemLeadingIcon,
		NavItemTrailingIcon,
		NavListSeparator,
	} from "@svelte-material-design/core/drawer";
	import { TopAppBar } from "./components/preview";
	import { ListItem } from "src/components/configurator/smui-components/list";
	import type { DrawerConfigurations } from "../types";

	export let configurations: DrawerConfigurations;

</script>

{#if configurations.layout === "below-top-app-bar"}
	<TopAppBar />
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
			<NavList
				itemsRows={configurations.itemsRows}
				dense={configurations.dense}
				itemsStyle={configurations.itemsStyle}
			>
				{#each configurations.items as item, index}
					<ListItem
						component={NavItem}
						contentComponent={NavItemContent}
						primaryTextComponent={PrimaryText}
						secondaryTextComponent={SecondaryText}
						leadingIconComponent={NavItemLeadingIcon}
						trailingIconComponent={NavItemTrailingIcon}
						bind:configurations={item}
						listConfigurations={configurations}
					/>
					{#if index === 0 && configurations.separator}
						<NavListSeparator
							insetPadding={configurations.separatorInsetPadding}
							insetLeading={configurations.separatorInsetLeading}
							insetTrailing={configurations.separatorInsetTrailing}
						/>
					{/if}
				{/each}
			</NavList>
		</Content>
	</Drawer>
{/key}

<AppContent>
	<svelte:fragment slot="topAppBar">
		{#if configurations.layout === "full-height"}
			<TopAppBar />
		{/if}
	</svelte:fragment>
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
