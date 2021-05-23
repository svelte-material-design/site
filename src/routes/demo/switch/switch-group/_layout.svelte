<svelte:options immutable={true} />

<script lang="ts">
	import { appendLayoutPath } from "src/components/layout/module-layout/context";
	import { Configurator } from "./_configurator";

	appendLayoutPath(`switch-group`);

</script>

<Configurator />
<slot />
