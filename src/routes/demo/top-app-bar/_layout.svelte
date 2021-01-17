<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Title } from "src/components/components-api";
	import { stores } from "@sapper/app";
	import { SubComponents } from "./_api";
	import { Configurator } from "./_configurator";
	import { TabBar } from "src/components/configurator/tab-bar";

	export let configurator: "standard" | "collapsable" = "standard";
	export let segment: string;

	const { page } = stores();
	setLayoutPath(`${getLayoutPath()}/top-app-bar`);
	const currentPath = getLayoutPath();

	configurator =
		segment === "collapsable-top-app-bar" ? "collapsable" : "standard";
</script>

<svelte:head>
	<title>Top App Bar - Svelte Material Design</title>
</svelte:head>

{#if $page.path.endsWith("iframe")}
	<slot />
{:else}
	<section>
		<Title module="top-app-bar">Top App Bar</Title>
		<TabBar
			bind:active={configurator}
			tabs={[
				{ key: "standard", label: "Top App Bar", href: currentPath },
				{
					key: "collapsable",
					label: "Collapsable Top App Bar",
					href: `${currentPath}/listbox`,
				},
			]}
		/>
		{#if segment === "collapsable-top-app-bar"}
			<slot />
		{:else}
			<Configurator />
			<SubComponents />
			<slot />
		{/if}
	</section>
{/if}

<style>
	a {
		display: contents;
	}
</style>
