<script lang="ts">
	import CheckboxConfigurator from "./_CheckboxConfigurator.svelte";

	import CheckboxGroupConfigurator from "./_CheckboxGroupConfigurator.svelte";
	import { Typography } from "@smui/core/typography";
</script>

<svelte:head>
	<title>Checkbox - SMUI</title>
</svelte:head>

<section>
	<Typography variant="headline2">Checkbox</Typography>

	{#if currentTab === "checkbox"}
		<CheckboxConfigurator />
	{:else if currentTab === "checkbox-group"}
		<CheckboxGroupConfigurator />
	{/if}
</section>
