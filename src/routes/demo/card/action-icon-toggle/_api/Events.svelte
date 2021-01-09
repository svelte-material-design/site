<script lang="ts">
	import {
		Events,
		ForwardedEvents,
	} from "src/components/components-api/events";
	import { IconButtonToggleEvents } from "src/components/components-api/events/common/button";
</script>

<Events>
	<svelte-fragment slot="table">
		<IconButtonToggleEvents />
	</svelte-fragment>
	<ForwardedEvents
		events={['click', 'mousedown', 'mouseup', 'keydown', 'keyup', 'focus', 'blur']} />
</Events>
