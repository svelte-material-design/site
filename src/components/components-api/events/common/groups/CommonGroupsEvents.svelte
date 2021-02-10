<svelte:options immutable={true} />

<script lang="ts">
	import {
		Event,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/events";
	import { OnChange } from "..";

	export let childrenTag: string = "Item";
	export let changeName: string = "OnMultiSelectionGroupChange";
	export let optionsName: string = "OnSelectionGroupOptionsChangeEvent";
</script>

<OnChange name={changeName} />
<Event>
	<Name>optionsChange</Name>
	<Signature keyword="interface" name={optionsName} />
	<Description>
		Event fired when a child {#if childrenTag}
			<code>{`<${childrenTag} />`}</code>
		{/if}is added/removed or when the <code>value</code> of an existing child gets
		updated.
	</Description>
</Event>
