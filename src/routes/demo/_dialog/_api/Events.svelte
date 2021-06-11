<svelte:options immutable={true} />

<script lang="ts">
	import { Events } from "src/components/components-api/events";
	import {
		BaseForwardedEvents,
		OnOpened,
		OnClosed,
		OnOpening,
		OnClosing,
	} from "src/components/components-api/events/common";

</script>

<Events>
	<OnOpened component="Dialog" />
	<OnClosed component="Dialog" />
	<OnOpening component="Dialog" />
	<OnClosing component="Dialog" />
</Events>
<BaseForwardedEvents />
