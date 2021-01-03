<script lang="ts">
	import { ReadonlyChip } from "./read-only-chip";

	export let readonly: boolean = false;
</script>

<code class="prop">
	<b>
		<slot />
	</b>
	{#if readonly}
		<ReadonlyChip />
	{/if}
</code>
