<svelte:options immutable={true} />

<script context="module" lang="ts">
	export async function preload() {}
</script>

<script lang="ts">
	import { stores } from "@sapper/app";
	import { Layout } from "src/components/layout";
	import { setLayoutPath } from "src/contexts";

	setLayoutPath("/demo");
	const { page } = stores();
	const iframe = $page.path.includes("iframe");
</script>

{#if iframe}
	<slot />
{:else}
	<Layout>
		<slot />
	</Layout>
{/if}
