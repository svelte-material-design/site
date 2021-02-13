<svelte:options immutable={true} />

<script lang="ts">
	import {
		Event,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/events";
</script>

<Event>
	<Name>open</Name>
	<Signature keyword="void" />
	<Description>Event fired on component open.</Description>
</Event>
<Event>
	<Name>close</Name>
	<Signature keyword="void" />
	<Description>Event fired on component close.</Description>
</Event>
<Event>
	<Name>closing</Name>
	<Signature keyword="void" />
	<Description
		>Event fired on component closing, but animation may not have completed yet.</Description
	>
</Event>
