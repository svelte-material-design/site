<script lang="ts">
	import { getCellClass } from "./TableContext";

	const className = getCellClass();
	let dom: HTMLDivElement;
</script>

<style lang="scss">
	@use "@material/data-table";

	.cell {
		display: flex;
		padding: 0 data-table.$cell-leading-padding;
		height: 100%;
		flex-direction: column;
		justify-content: center;
	}
</style>

<div bind:this={dom} class="cell {className}">
	<slot />
</div>
