<script lang="ts">
	import { appendLayoutPath } from "src/components/layout/module-layout/context";
	import { SubComponents } from "./_api";
	import Configurator from "./_configurator/Configurator.svelte";

	appendLayoutPath(`discrete-slider`);

</script>

<Configurator />
<SubComponents />
<slot />
