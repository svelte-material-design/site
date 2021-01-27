<script lang="ts">
	import { Table } from "../common/table";
	import { setSlotsContext } from "./SlotsContext";

	setSlotsContext();
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
