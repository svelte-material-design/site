<svelte:options immutable={true} />

<script lang="ts">
	import { IndeterminateLinearProgress } from "@svelte-material-design/core/linear-progress";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();

</script>

<IndeterminateLinearProgress
	reversed={$configurations$.reversed}
	closed={$configurations$.closed}
/>
