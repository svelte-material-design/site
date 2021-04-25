<svelte:options immutable={true} />

<script lang="ts">
	import { ReadonlyChip, ReadwriteChip } from "../common/particles/chips";
	import { Cell } from "../common/table";

	export let readonly: boolean = false;
	export let readwrite: boolean = false;
</script>

<Cell>
	<code>
		<b>
			<slot />
		</b>
		{#if readwrite}
			<ReadwriteChip />
		{/if}
		{#if readonly}
			<ReadonlyChip />
		{/if}
	</code>
</Cell>
