<script lang="ts">
	import "./index.scss";
	import { TabBar } from "@smui/core/tab-bar";
	import { Tab, Label } from "@smui/core/tab";
	import InputFieldConfigurator from "./_InputFieldConfigurator.svelte";
	import TextAreaConfigurator from "./_TextAreaConfigurator.svelte";
	import FullWIdthTextFieldConfigurator from "./_FullWIdthTextFieldConfigurator.svelte";

	let currentTab: "input-field" | "text-area" | "full-width-text-field" =
		"input-field";
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
		<Tab key="full-width-text-field">
			<Label>Full Width Text Field</Label>
		</Tab>
	</TabBar>

	{#if currentTab === 'input-field'}
		<InputFieldConfigurator />
	{:else if currentTab === 'text-area'}
		<TextAreaConfigurator />
	{:else if currentTab === 'full-width-text-field'}
		<FullWIdthTextFieldConfigurator />
	{/if}
</section>
