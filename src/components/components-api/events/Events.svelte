<script lang="ts">
	import { Name } from "./particles";
	import { Comma } from "../common/particles";
	import { Typography } from "@smui/core/typography";
	import { Table } from "../common/table";

	export let forwardedHTMLEvents: string[];
</script>

{#if $$slots.default}
	<Typography variant="headline3">Events</Typography>
	<Table cols={3}>
		<slot />
	</Table>
{/if}
{#if forwardedHTMLEvents}
	<Typography variant="headline6">Forwarded HTML events</Typography>
	<Comma values={forwardedHTMLEvents} let:value>
		<Name>{value}</Name>
	</Comma>
{/if}
