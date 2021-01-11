<script lang="ts">
	export let indentation: number;
</script>

<style lang="scss">
	.row {
		display: contents;

		> :global(.cell:first-child) {
			margin-left: var(--row-indent);
		}
	}
</style>

<div
	class="row"
	style={indentation ? `--row-indent: ${indentation}em` : undefined}>
	<slot />
</div>
