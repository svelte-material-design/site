<svelte:options immutable={true} />

<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Configurator } from "./_configurator";

	setLayoutPath(`${getLayoutPath()}/list-group`);
</script>

<Configurator />
<slot />
