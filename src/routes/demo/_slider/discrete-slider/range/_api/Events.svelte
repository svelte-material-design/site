<script lang="ts">
	import {
		Events,
		ForwardedEvents,
	} from "src/components/components-api/events";
	import {
		OnInput,
		OnChange,
	} from "src/components/components-api/events/common";
</script>

<Events>
	<OnInput name="OnRangeInputEvent" />
	<OnChange name="OnRangeChangeEvent" />
	<ForwardedEvents events={["focus", "blur"]} />
</Events>
