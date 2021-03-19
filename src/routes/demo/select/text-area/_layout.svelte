<svelte:options immutable={true} />

<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Configurator } from "./_configurator";
	import { SubComponents } from "./_api";

	setLayoutPath(`${getLayoutPath()}/text-area`);
</script>

<Configurator />
<SubComponents />
<slot />
