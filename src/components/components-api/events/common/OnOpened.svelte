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
	<Name>opened</Name>
	<Signature keyword="interface" name="On{component}Opened" />
	<Description>
		Indicates when the <code>{`<${component} />`}</code> finishes its opening animation.
	</Description>
</Event>