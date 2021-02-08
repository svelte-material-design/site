<svelte:options immutable={true} />

<script lang="ts">
	import {
		Event,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/events";

	export let interfaceName: string;
	export let selectedPropName: string = "selected";
</script>

<Event>
	<Name>change</Name>
	<Signature keyword="interface" name={interfaceName} />
	<Description>
		Event fired when the
		<code>{selectedPropName}</code>
		value change following a user click.
	</Description>
</Event>
