<svelte:options immutable={true} />

<script lang="ts">
	export let indentation: number = undefined;
</script>

<div
	class="row"
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
