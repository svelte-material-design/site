<svelte:options immutable={true} />

<script lang="ts">
	import { Events } from "src/components/components-api/events";
	import { ItemChange } from "src/components/components-api/events/common/groups";
	import { ForwardedEvents } from "src/components/components-api/events";
</script>

<Events>
	<ItemChange interfaceName="OnItemSelectedEvent" />
</Events>
<ForwardedEvents
	events={[
		"click",
		"mousedown",
		"mouseup",
		"keydown",
		"keyup",
		"focus",
		"blur",
		"focusin",
		"focusout",
	]}
/>
