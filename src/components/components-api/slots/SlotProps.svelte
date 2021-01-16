<script lang="ts">
	import { Table } from "../common/table";
</script>

<div class="props">
	<Table cols={3}>
		<slot />
	</Table>
</div>

<style>
	.props {
		grid-column: span 2;
	}
</style>
