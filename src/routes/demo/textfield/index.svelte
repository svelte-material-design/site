<script lang="ts">
	import "./index.scss";
	import { TabBar } from "@smui/core/tab-bar";
	import { Tab, Label } from "@smui/core/tab";
	import InputFieldConfigurator from "./_InputFieldConfigurator.svelte";
	import TextAreaConfigurator from "./_TextAreaConfigurator.svelte";
	// import TextArea from "./_TextArea.svelte";
	// import DifferentTypesTextField from "./_DifferentTypesTextField.svelte";
	// import AutoComplete from "./_AutoComplete.svelte";
	// import ExampleTextField from "./_ExampleTextField.svelte";
	// import BaseTextField from "./_BaseTextField.svelte";

	let currentTab: "input-field" | "text-area" = "text-area";
</script>

<svelte:head>
	<title>Text Field - SMUI</title>
</svelte:head>

<section>
	<h2>Text Field</h2>

	<TabBar bind:active={currentTab}>
		<Tab key="input-field">
			<Label>Input Field</Label>
		</Tab>
		<Tab key="text-area">
			<Label>Text Area</Label>
		</Tab>
	</TabBar>

	{#if currentTab === 'input-field'}
		<InputFieldConfigurator />
	{:else if currentTab === 'text-area'}
		<TextAreaConfigurator />
	{/if}
	<!-- <ExampleTextField /> -->
	<!-- <BaseTextField variant="filled" title="Filled" /> -->
	<!-- <BaseTextField variant="outlined" title="Outlined" />
	<BaseTextField variant="filled" textFieldClass="shaped" title="Shaped" />
	<BaseTextField
		variant="outlined"
		textFieldClass="shaped-outline"
		title="Shaped Outlined" />
	<TextArea />
	<DifferentTypesTextField />
	<AutoComplete /> -->
</section>
