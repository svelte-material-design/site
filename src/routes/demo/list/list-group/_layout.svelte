<svelte:options immutable={true} />

<script lang="ts">
	import { appendLayoutPath } from "src/components/layout/module-layout/context";
	import { SubComponents } from "./_api";
	import { Configurator } from "./_configurator";

	appendLayoutPath(`list-group`);

</script>

<Configurator />
<SubComponents />
<slot />
