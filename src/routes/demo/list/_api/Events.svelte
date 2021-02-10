<svelte:options immutable={true} />

<script lang="ts">
	import { Events } from "src/components/components-api/events";
	import { CommonGroupsEvents } from "src/components/components-api/events/common/groups";
	import { ForwardedEvents } from "src/components/components-api/events";
</script>

<Events>
	<CommonGroupsEvents
		childrenTag="Item"
		changeName="OnListChangeEvent"
		optionsName="OnListChildrenChangeEvent"
	/>
</Events>
<ForwardedEvents
	events={[
		"click",
		"mousedown",
		"mouseup",
		"keydown",
		"keyup",
		"focusin",
		"focusout",
	]}
/>
