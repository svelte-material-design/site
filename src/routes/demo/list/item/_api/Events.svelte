<svelte:options immutable={true} />

<script lang="ts">
	import { Events } from "src/components/components-api/events";
	import { ForwardedEvents } from "src/components/components-api/events";
	import { OnChange } from "src/components/components-api/events/common";
</script>

<Events>
	<OnChange prop="selected" name="OnItemChangeEvent" />
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
