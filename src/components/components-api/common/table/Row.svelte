<svelte:options immutable={true} />

<script lang="ts">
	import { getRowClass } from "./TableContext";

	export let indentation: number = undefined;

	const className = getRowClass();
</script>

<div
	class="row {className}"
	style={indentation ? `--row-indent: ${indentation}em` : undefined}
>
	<slot />
</div>

<style lang="scss">
	.row {
		display: contents;

		> :global(.cell:first-child) {
			margin-left: var(--row-indent);
		}
	}
</style>
