<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";

	export let maxItemsRows: number = 3;
</script>

<Prop>
	<Name>itemsRows</Name>
	<Signature keyword="number">
		<Default value={1} />
	</Signature>
	<Description>
		The list items content lines; it influences the height and how the text is
		showed. Cannot be higher than {maxItemsRows} or lower than 1.
	</Description>
</Prop>
<Prop>
	<Name>dense</Name>
	<Signature keyword="boolean">
		<Default value={false} />
	</Signature>
	<Description>
		If <code>true</code>, the items appear more compact.
	</Description>
</Prop>
