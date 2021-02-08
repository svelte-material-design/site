<script lang="ts" context="module">
	let count: number = 0;
</script>

<script lang="ts">
	import { setCellClass, setRowClass } from "./TableContext";
	import classes from "./table.module.scss";

	export let cols: number;

	let id: string = `components-api__common__table__Table--${count++}`;

	setCellClass(classes.cell);
	setRowClass(classes.row);
</script>

<div
	{id}
	class={classes.table}
	style="grid-template-columns: repeat({cols}, auto);"
>
	<slot />
</div>
