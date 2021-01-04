<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";
	import { Table } from "../particles";
</script>

<div class="props">
	<Typography variant="headline3">Props</Typography>
	<Table cols={3}>
		<slot />
	</Table>
</div>
