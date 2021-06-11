<svelte:options immutable={true} />

<script lang="ts">
	import {
		Events,
		Event,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/events";
</script>

<Events>
	<Event>
		<Name>open</Name>
		<Signature keyword="void" />
		<Description>Emitted when the drawer is opened</Description>
	</Event>
	<Event>
		<Name>close</Name>
		<Signature keyword="void" />
		<Description>Emitted when the drawer is closed</Description>
	</Event>
</Events>
