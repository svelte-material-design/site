<script lang="ts">
	import {
		Events,
		ForwardedEvents,
	} from "src/components/components-api/events";
</script>

<Events>
	<ForwardedEvents
		events={['click', 'mousedown', 'mouseup', 'keydown', 'keyup', 'focus', 'blur']} />
</Events>
