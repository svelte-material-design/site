<script lang="ts">
	import {
		Events,
		Event,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/events";
	import { CommonButtonForwardedEvents } from "src/components/components-api/events/common/button";
</script>

<Events>
	<Event>
		<Name>change</Name>
		<Signature keyword="type" name="OnIconButtonToggleChange" />
		<Description>
			Event fired when the
			<code>active</code>
			value change following a user click.
		</Description>
	</Event>
</Events>
<CommonButtonForwardedEvents />
