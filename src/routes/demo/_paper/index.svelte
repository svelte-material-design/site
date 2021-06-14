<svelte:options immutable={true} />

<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";
	import PaperConfigurator from "./_PaperConfigurator.svelte";

</script>

<svelte:head>
	<title>Paper - SMUI</title>
</svelte:head>

<section>
	<Typography variant="headline2">Paper</Typography>

	<PaperConfigurator />
</section>
