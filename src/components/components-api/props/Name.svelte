<svelte:options immutable={true} />

<script lang="ts">
	import {
		ReadonlyChip,
		ReadwriteChip,
		MandatoryChip,
	} from "../common/particles/chips";
	import { Cell } from "../common/table";

	export let readonly: boolean = false;
	export let readwrite: boolean = false;
	export let mandatory: boolean = false;

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
		{#if mandatory}
			<MandatoryChip />
		{/if}
	</code>
</Cell>
