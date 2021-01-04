<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";
	import { Table } from "../particles";
</script>

<Typography variant="headline4">Sub-components</Typography>

<Table cols={2}>
	<slot />
</Table>
