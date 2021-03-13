<svelte:options immutable={true} />

<script lang="ts">
	import {
		Event,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/events";

	export let name: string;
	export let prop: string = "value";
</script>

<Event>
	<Name>input</Name>
	<Signature keyword="interface" {name} />
	<Description>
		Emitted when the {#if prop === "value"}
			<code>value</code>
		{:else}
			<code>{prop}</code> value
		{/if} has been changed and committed from a user event. Mirrors the native
		<code>input</code> event.
	</Description>
</Event>
