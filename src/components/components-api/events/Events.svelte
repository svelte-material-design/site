<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";
	import { Table } from "../common/table";
</script>

{#if $$slots.table}
	<Typography variant="headline3">Events</Typography>
	<Table cols={3}>
		<slot name="table" />
	</Table>
{/if}
<slot />
