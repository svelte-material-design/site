<svelte:options immutable={true} />

<script lang="ts">
	import { getPageType } from "./context";

	const pageType = getPageType();

</script>

{#if pageType === "module" || pageType === "api"}
	<slot />
{:else}
	<slot name="main" />
{/if}
