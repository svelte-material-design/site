<script lang="ts">
	import { ReadonlyChip } from "../particles/read-only-chip";
	import { Cell } from "../particles/atoms";

	export let readonly: boolean = false;
</script>

<Cell>
	<code class="prop">
		<b>
			<slot />
		</b>
		{#if readonly}
			<ReadonlyChip />
		{/if}
	</code>
</Cell>
