<svelte:options immutable={true} />

<script lang="ts">
	import {
		Events,
		Event,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/events";
	import { BaseForwardedEvents } from "src/components/components-api/events/common";

	export let component: string;

</script>

<Event>
	<Name>opening</Name>
	<Signature keyword="interface" name="On{component}Opening" />
	<Description>
		Indicates when the <code>{`<${component} />`}</code> begins its opening animation.
	</Description>
</Event>
