<script lang="ts">
	import {
		Event,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/events";

	export let name: string;
</script>

<Event>
	<Name>change</Name>
	<Signature keyword="interface" {name} />
	<Description>
		Emitted when a value has been changed and committed from a user event.
		Mirrors the native <code>change</code> event.
	</Description>
</Event>
