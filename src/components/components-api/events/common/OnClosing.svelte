<svelte:options immutable={true} />

<script lang="ts">
	import {
		Events,
		Event,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/events";

	export let component: string;

</script>

<Event>
	<Name>closing</Name>
	<Signature keyword="interface" name="On{component}Closing" />
	<Description>
		Indicates when the <code>{`<${component} />`}</code> begins its closing animation.
	</Description>
</Event>
