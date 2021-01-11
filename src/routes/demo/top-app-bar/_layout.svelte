<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Title } from "src/components/components-api";
	import {
		TabBar,
		Tab,
		Label,
		Content,
		TabIndicator,
	} from "@svelte-material-design/core/tab-bar";
	import { stores } from "@sapper/app";

	export let configurator: "standard" | "collapsable" = "standard";
	export let segment: string;

	const { page } = stores();
	setLayoutPath(`${getLayoutPath()}/top-app-bar`);
	const currentPath = getLayoutPath();

	configurator =
		segment === "collapsable-top-app-bar" ? "collapsable" : "standard";
</script>

<style>
	a {
		display: contents;
	}
</style>

<svelte:head>
	<title>Top App Bar - Svelte Material Design</title>
</svelte:head>

{#if $page.path.endsWith('iframe')}
	<slot />
{:else}
	<section>
		<Title module="top-app-bar">Top App Bar</Title>
		<TabBar bind:active={configurator}>
			<a href={currentPath}>
				<Tab key="standard">
					<Content>
						<Label>Top App Bar</Label>
					</Content>
					<TabIndicator />
				</Tab>
			</a>
			<a href={`${currentPath}/collapsable-top-app-bar`}>
				<Tab key="collapsable">
					<Content>
						<Label>Collapsable Top App Bar</Label>
					</Content>
					<TabIndicator />
				</Tab>
			</a>
		</TabBar>
		<slot />
	</section>
{/if}
