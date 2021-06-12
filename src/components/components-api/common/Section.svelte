<svelte:options immutable={true} />

<script lang="ts">
	// import { Typography } from "@svelte-material-design/core/typography";
	import { Table } from "../common/table";

	// export let title: string;
	export let cols: number = 3;
</script>

<!-- <Typography variant="headline3">
	{title}
</Typography> -->
<Table {cols}>
	<slot />
</Table>
