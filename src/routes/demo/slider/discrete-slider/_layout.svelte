<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";

	export let segment: string;
	setLayoutPath(`${getLayoutPath()}/discrete-slider`);
</script>

{#if segment === "iframe"}
	<slot />
{:else}
	<slot />
{/if}
