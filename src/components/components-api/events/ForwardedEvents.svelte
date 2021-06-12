<svelte:options immutable={true} />

<script lang="ts">
	import { Name } from "./particles";
	import { Comma } from "../common/particles";
	import { ForwardedEventsHeading } from "../headings";

	export let events: string[];

</script>

<ForwardedEventsHeading />

<Comma values={events} let:value>
	<Name>{value}</Name>
</Comma>
