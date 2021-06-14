<svelte:options immutable={true} />

<script lang="ts">
	import { LinearProgress } from "@svelte-material-design/core/linear-progress";
	import type { LinearProgressConfigurations } from "./types";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();
</script>

<LinearProgress
	reversed={$configurations$.reversed}
	closed={$configurations$.closed}
	progress={$configurations$.progress}
	buffer={$configurations$.buffer}
/>
