<svelte:options immutable={true} />

<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Configurator } from "./_configurator";

	export let segment: string;

	setLayoutPath(`${getLayoutPath()}/checkbox-group`);
</script>

<Configurator />
<slot />
