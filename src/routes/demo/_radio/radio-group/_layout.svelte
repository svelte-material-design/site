<svelte:options immutable={true} />

<script lang="ts">
	import { appendLayoutPath } from "src/components/layout/module-layout/context";
	import { Configurator } from "./_configurator";

	appendLayoutPath(`radio-group`);

</script>

<Configurator />
<slot />
