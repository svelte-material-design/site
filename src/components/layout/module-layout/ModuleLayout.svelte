<svelte:options immutable={true} />

<script lang="ts">
	import { Title } from "src/components/components-api";
	import { stores } from "@sapper/app";

	export let module: string;
	export let title: string;

	const { page } = stores();

</script>

<svelte:head>
	<title>{title} - Svelte Material Design</title>
</svelte:head>

{#if $page.path.endsWith("iframe")}
	<slot />
{:else}
	<div>
		<Title {module}>{title}</Title>
		<slot name="page" />
	</div>
{/if}

<style>
	div {
		padding: 1em;
	}

</style>
