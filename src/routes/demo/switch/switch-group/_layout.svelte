<svelte:options immutable={true} />

<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Configurator } from "./_configurator";

	setLayoutPath(`${getLayoutPath()}/switch-group`);
</script>

<Configurator />
<slot />
