<svelte:options immutable={true} />

<script lang="ts">
	import {
		Event,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/events";

	export let name: string = "OnChangeEvent";
	export let prop: string = "value";
	export let native: boolean = false;
</script>

<Event>
	<Name>change</Name>
	<Signature keyword="interface" {name} />
	<Description>
		<slot>
			Emitted when the {#if prop === "value"}
				<code>value</code>
			{:else}
				<code>{prop}</code> value
			{/if} has been changed and committed from a user event.
			{#if native}
				Mirrors the native <code>change</code> event.
			{/if}
		</slot>
	</Description>
</Event>
