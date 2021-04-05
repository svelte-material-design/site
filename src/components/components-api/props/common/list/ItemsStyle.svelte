<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";

	export let name: string = "ListItemsStyle";
</script>

<Prop>
	<Name>itemsStyle</Name>
	<Signature
		keyword="type"
		{name}
		allowedValues={["textual", "avatar", "icon", "image", "thumbnail", "video"]}
	>
		<Default value="textual" />
	</Signature>
	<Description>The list items style.</Description>
</Prop>