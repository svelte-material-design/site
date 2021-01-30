<script lang="ts">
	import { Configurator } from "./_configurator";
	import { setLayoutPath, getLayoutPath } from "src/contexts";

	export let segment: string;
	setLayoutPath(`${getLayoutPath()}/checkbox-group`);
</script>

<Configurator />
