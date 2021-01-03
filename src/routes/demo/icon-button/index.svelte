<script lang="ts">
	import { TabBar, Content, Tab, TabIndicator } from "@smui/core/tab-bar";
	import BasicIconButtonConfigurator from "./_BasicIconButtonConfigurator.svelte";
	import IconButtonToggleConfigurator from "./_IconButtonToggleConfigurator.svelte";

	let currentTab: "basic" | "toggle" = "basic";
</script>

<svelte:head>
	<title>Icon Button - SMUI</title>
</svelte:head>

<section>
	<h2>Icon Button</h2>

	<TabBar bind:active={currentTab}>
		<Tab key="basic">
			<Content>Icon Button</Content>
			<TabIndicator />
		</Tab>
		<Tab key="toggle">
			<Content>Icon Button Toggle</Content>
			<TabIndicator />
		</Tab>
	</TabBar>
	{#if currentTab === 'basic'}
		<BasicIconButtonConfigurator />
	{:else}
		<IconButtonToggleConfigurator />
	{/if}
</section>
