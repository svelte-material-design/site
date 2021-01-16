<script lang="ts">
	import { Table } from "../common/table";
</script>

<div class="elements">
	<Table cols={3}>
		<slot />
	</Table>
</div>

<style>
	.elements {
		grid-column: span 2;
	}
</style>
