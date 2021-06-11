<svelte:options immutable={true} />

<script lang="ts">
	import { appendLayoutPath } from "src/components/layout/module-layout/context";
	import { Configurator } from "./_configurator";
	import { SubComponents } from "./_api";

	appendLayoutPath(`text-area`);

</script>

<Configurator />
<SubComponents />
<slot />
