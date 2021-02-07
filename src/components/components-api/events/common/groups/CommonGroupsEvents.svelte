<svelte:options immutable={true} />

<script lang="ts">
	import {
		Event,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/events";

	export let childrenTag: string = undefined;
</script>

<Event>
	<Name>change</Name>
	<slot name="valueSignature">
		<Signature keyword="type" name="OnMultiSelectionGroupChangeEvent" />
	</slot>
	<Description>
		Event fired when the
		<code>value</code>
		change following a user input.
	</Description>
</Event>
<Event>
	<Name>optionsChange</Name>
	<Signature keyword="type" name="OnSelectionGroupOptionsChangeEvent" />
	<Description>
		Event fired when a child {#if childrenTag}<code>{`<${childrenTag} />`}</code
			>
		{/if}is added/removed or when the <code>value</code> of an existing child gets
		updated.
	</Description>
</Event>
