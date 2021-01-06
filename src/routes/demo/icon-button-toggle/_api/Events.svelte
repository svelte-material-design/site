<script lang="ts">
	import {
		Events,
		Event,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/events";
</script>

<Events
	forwardedHTMLEvents={['click', 'mousedown', 'mouseup', 'keydown', 'keyup', 'focus', 'blur']}>
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
