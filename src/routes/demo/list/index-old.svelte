<!-- <svelte:options immutable={true} /><script lang="ts">
	import { Typography } from "@smui/core/typography";
	import ListConfigurator from "./_ListConfigurator.svelte";
	import ListBoxConfigurator from "./_ListBoxConfigurator.svelte";
	import NavListConfigurator from "./_NavListConfigurator.svelte";
	import { TabBar } from "src/components/configurator/tab-bar";
	import { setLayoutPath, getLayoutPath } from "src/contexts";

	setLayoutPath(`${getLayoutPath()}/list`);
	const currentPath = getLayoutPath();

	let currentTab: "list" | "listbox" | "navlist" = "list";
</script><svelte:head>
	<title>Switch - SMUI</title>
</svelte:head>

<section>
	<Typography variant="headline2">Lists</Typography>

	<TabBar
		bind:active={currentTab}
		tabs={[
			{ key: "list", label: "List", href: currentPath },
			{ key: "listbox", label: "Listbox", href: `${currentPath}/listbox` },
			{ key: "navlist", label: "Navlist", href: `${currentPath}/navlist` },
		]}
	/>

	{#if currentTab === "list"}
		<ListConfigurator />
	{:else if currentTab === "listbox"}
		<ListBoxConfigurator />
	{:else if currentTab === "navlist"}
		<NavListConfigurator />
	{/if}
</section> -->
