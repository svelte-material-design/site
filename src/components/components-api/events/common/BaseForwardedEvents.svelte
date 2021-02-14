<svelte:options immutable={true} />

<script lang="ts">
	import { ForwardedEvents } from "src/components/components-api/events";

	export let additionalEvents: string[] = [];
</script>

<ForwardedEvents
	events={[
		"click",
		"mousedown",
		"mouseup",
		"keydown",
		"keyup",
		...additionalEvents,
	]}
/>
