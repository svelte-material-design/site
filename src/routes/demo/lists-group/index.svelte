<script lang="ts">
	import { Typography } from "@smui/core/typography";
	import ListGroupConfigurator from "./_ListGroupConfigurator.svelte";

	let currentTab: "list" | "listbox" | "navlist" = "list";
</script>

<svelte:options immutable={true} />

<svelte:head>
	<title>Switch - SMUI</title>
</svelte:head>

<section>
	<Typography variant="headline2">Lists Group</Typography>

	<ListGroupConfigurator />
</section>
