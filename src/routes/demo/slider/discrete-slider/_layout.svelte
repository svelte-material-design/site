<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { SubComponents } from "./_api";
	import Configurator from "./_configurator/Configurator.svelte";

	setLayoutPath(`${getLayoutPath()}/discrete-slider`);
</script>

<Configurator />
<SubComponents />
<slot />
