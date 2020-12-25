<script lang="ts">
	import { Typography } from "@smui/core/packages/typography/src";
	import BasicTabs from "./_BasicTabs.svelte";
	import CustomIndicatorTabs from "./_CustomIndicatorTabs.svelte";
	import IconTabs from "./_IconTabs.svelte";
	import MinWidthTabs from "./_MinWidthTabs.svelte";
	import ScrollingTabs from "./_ScrollingTabs.svelte";
	import TabsConfigurator from "./_TabsConfigurator.svelte";
</script>

<style>
	section > div {
		margin-bottom: 40px;
	}

	.icon-indicators
		:global(.mdc-tab-indicator--active .mdc-tab-indicator__content) {
		opacity: 0.2;
	}
</style>

<svelte:head>
	<title>Tabs - SMUI</title>
</svelte:head>

<section>
	<Typography variant="headline2">Tabs</Typography>

	<TabsConfigurator />

	<BasicTabs />
	<IconTabs />
	<CustomIndicatorTabs />
	<MinWidthTabs />
	<ScrollingTabs />
</section>
