<script lang="ts">
	import CheckboxConfigurator from "./_CheckboxConfigurator.svelte";

	import { TabBar } from "@smui/core/tab-bar";
	import { Tab, Label } from "@smui/core/tab";
	import CheckboxGroupConfigurator from "./_CheckboxGroupConfigurator.svelte";
	import { Typography } from "@smui/core/packages/typography";

	let currentTab: "checkbox" | "checkbox-group" = "checkbox";
</script>

<svelte:head>
	<title>Checkbox - SMUI</title>
</svelte:head>

<section>
	<Typography variant="headline2">Checkbox</Typography>

	<TabBar bind:active={currentTab}>
		<Tab key="checkbox">
			<Label>Checkbox</Label>
		</Tab>
		<Tab key="checkbox-group">
			<Label>Checkbox Group</Label>
		</Tab>
	</TabBar>
	{#if currentTab === 'checkbox'}
		<CheckboxConfigurator />
	{:else if currentTab === 'checkbox-group'}
		<CheckboxGroupConfigurator />
	{/if}
</section>
