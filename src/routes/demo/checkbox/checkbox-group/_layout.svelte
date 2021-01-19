<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";

	export let segment: string;
	setLayoutPath(`${getLayoutPath()}/checkbox-group`);
</script>

{#if segment === "iframe"}
	<slot />
{:else}
	<slot />
{/if}
