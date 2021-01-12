<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { SubComponents } from "./_api";
	import { Configurator } from "./_configurator";
	import { stores } from "@sapper/app";

	const { page } = stores();
	setLayoutPath(`${getLayoutPath()}/collapsable-top-app-bar`);
</script>

{#if $page.path.endsWith('iframe')}
	<slot />
{:else}
	<Configurator />
	<SubComponents />
	<slot />
{/if}
