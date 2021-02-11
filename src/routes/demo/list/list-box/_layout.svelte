<svelte:options immutable={true} />

<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { SubComponents } from "./_api";
	import { Configurator } from "./_configurator";

	setLayoutPath(`${getLayoutPath()}/list-box`);
</script>

<Configurator />
<SubComponents />
<slot />
