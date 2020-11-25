<script lang="ts">
	import { Typography } from "@smui/core/typography";
	import { Tab, Label } from "@smui/core/tab";
	import { TabBar } from "@smui/core/tab-bar";
	import SwitchConfigurator from "./_SwitchConfigurator.svelte";
	import SwitchGroupConfigurator from "./_SwitchGroupConfigurator.svelte";

	let currentTab: "switch" | "group-switch" = "group";
</script>

<svelte:head>
	<title>Switch - SMUI</title>
</svelte:head>

<section>
	<Typography variant="headline2">Switch</Typography>

	<TabBar bind:active={currentTab}>
		<Tab key="switch">
			<Label>Switch</Label>
		</Tab>
		<Tab key="group-switch">
			<Label>Switch group</Label>
		</Tab>
	</TabBar>

	{#if currentTab === 'switch'}
		<SwitchConfigurator />
	{:else if currentTab === 'group-switch'}
		<SwitchGroupConfigurator />
	{/if}
</section>
