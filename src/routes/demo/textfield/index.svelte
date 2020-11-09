<script lang="ts">
	import "./index.scss";
	import InputFieldConfigurator from "./_InputFieldConfigurator.svelte";
	// import TextArea from "./_TextArea.svelte";
	// import DifferentTypesTextField from "./_DifferentTypesTextField.svelte";
	// import AutoComplete from "./_AutoComplete.svelte";
	// import ExampleTextField from "./_ExampleTextField.svelte";
	import BaseTextField from "./_BaseTextField.svelte";
</script>

<svelte:head>
	<title>Text Field - SMUI</title>
</svelte:head>

<section>
	<h2>Text Field</h2>

	<InputFieldConfigurator />
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
