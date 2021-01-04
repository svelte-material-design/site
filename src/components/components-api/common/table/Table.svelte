<script lang="ts" context="module">
	let count: number = 0;
</script>

<script lang="ts">
	import { setCellClass } from "./TableContext";
	import { createStyleElement } from "./tableStyleElement";
	import classes from "./table.module.scss";

	export let cols: number;

	let id: string = `components-api__common__table__Table--${count++}`;

	setCellClass(classes.cell);

	const styleElement = createStyleElement(id, classes.cell, cols);
</script>

<style lang="scss">
	@use "@material/data-table";

	.table {
		display: grid;
		grid-auto-rows: minmax(data-table.$minimum-cell-height, auto);
	}
</style>

{@html styleElement}

<div {id} class="table" style="grid-template-columns: repeat({cols}, auto);">
	<slot />
</div>
