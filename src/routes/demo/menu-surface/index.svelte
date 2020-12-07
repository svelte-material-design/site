<script lang="ts">
	import MenuSurfaceCofigurator from "./_MenuSurfaceCofigurator.svelte";
	import { Typography } from "@smui/core/typography";
	// import ManualAnchorMenuSurface from "./_ManualAnchorMenuSurface.svelte";
</script>

<svelte:head>
	<title>Menu Surface - SMUI</title>
</svelte:head>

<section>
	<Typography variant="headline2">Menu Surface</Typography>

	<MenuSurfaceCofigurator />
	<div style="padding-top: 200px;">Long div for scrolling...</div>
</section>
