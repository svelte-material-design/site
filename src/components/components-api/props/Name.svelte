<script lang="ts">
	import { ReadonlyChip } from "../particles/chips";
	import { Cell } from "../common/table";

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
