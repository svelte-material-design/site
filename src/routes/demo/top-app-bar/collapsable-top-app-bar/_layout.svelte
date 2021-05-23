<svelte:options immutable={true} />

<script lang="ts">
	import { appendLayoutPath } from "src/components/layout/module-layout/context";
	import { SubComponents } from "./_api";
	import { Configurator } from "./_configurator";
	import { stores } from "@sapper/app";

	const { page } = stores();
	appendLayoutPath(`collapsable-top-app-bar`);

</script>

{#if $page.path.endsWith("iframe")}
	<slot />
{:else}
	<Configurator />
	<SubComponents />
	<slot />
{/if}
