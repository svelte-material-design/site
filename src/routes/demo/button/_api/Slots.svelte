<svelte:options immutable={true} />

<script lang="ts">
	import {
		Slots,
		Description,
		Slot,
		Name,
	} from "src/components/components-api/slots";

</script>

<Slots>
	<Slot>
		<Name>default</Name>
		<Description>Button's content.</Description>
	</Slot>
	<Slot>
		<Name>leading</Name>
		<Description>Wraps the leading icon.</Description>
	</Slot>
	<Slot>
		<Name>trailing</Name>
		<Description>Wraps the trailing icon.</Description>
	</Slot>
</Slots>
