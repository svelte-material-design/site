<script lang="ts">
	import { Event, Comma } from "./particles";
	import { Typography } from "@smui/core/typography";

	export let forwardedHTMLEvents: string[];
</script>

<!-- <Typography variant="headline3">Events</Typography> -->
{#if forwardedHTMLEvents}
	<Typography variant="headline6">Forwarded HTML events</Typography>
	<Comma values={forwardedHTMLEvents} let:value>
		<Event>{value}</Event>
	</Comma>
{/if}
