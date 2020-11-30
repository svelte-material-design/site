<script lang="ts">
	import { Typography } from "@smui/core/typography";
	import { Tab, Label } from "@smui/core/tab";
	import { TabBar } from "@smui/core/tab-bar";
	import RadioList from "./_RadioList.svelte";
	import CheckboxList from "./_CheckboxList.svelte";
	import ListBox from "./_ListBox.svelte";
	import SelectableList from "./_SelectableList.svelte";
	import ThreeLineList from "./_ThreeLineList.svelte";
	import GroupList from "./_GroupList.svelte";
	import ListConfigurator from "./_ListConfigurator.svelte";
	import ListBoxConfigurator from "./_ListBoxConfigurator.svelte";

	let currentTab: "list" | "listbox" = "list";
</script>

<svelte:options immutable={true} />

<svelte:head>
	<title>Switch - SMUI</title>
</svelte:head>

<section>
	<Typography variant="headline2">Lists</Typography>

	<TabBar bind:active={currentTab}>
		<Tab key="list">
			<Label>List</Label>
		</Tab>
		<Tab key="listbox">
			<Label>Listbox</Label>
		</Tab>
	</TabBar>

	{#if currentTab === 'list'}
		<ListConfigurator />
	{:else if currentTab === 'listbox'}
		<ListBoxConfigurator />
	{/if}

	<SelectableList />
	<ThreeLineList />
	<GroupList />
	<ListBox />
	<RadioList />
	<CheckboxList />
</section>
