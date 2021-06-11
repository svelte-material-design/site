<svelte:options immutable={true} />

<script lang="ts">
	import { TagsHeading } from "../headings"
	import { Typography } from "@svelte-material-design/core/typography";
	import { Table } from "../common/table";

</script>

<TagsHeading />

<Table cols={2}>
	<slot />
</Table>
