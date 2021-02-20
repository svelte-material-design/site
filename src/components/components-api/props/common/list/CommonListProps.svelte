<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";
	import { CommonGroupsProps } from "../groups";
</script>

<CommonGroupsProps configurable groupComponent="List" multi>
	<svelte-fragment slot="valueSignature">
		<Signature
			keyword="type"
			name="ListValue"
			instances={["string", "string[]"]}
		>
			<Default>
				When <code>selectionType</code> is <code>multi</code> then
				<code>[]</code>.
			</Default>
		</Signature>
	</svelte-fragment>
</CommonGroupsProps>
<Prop>
	<Name>itemsStyle</Name>
	<Signature
		keyword="type"
		name="ListItemsStyle"
		allowedValues={["textual", "avatar", "icon", "image", "thumbnail", "video"]}
	>
		<Default value="textual" />
	</Signature>
	<Description>The list items style.</Description>
</Prop>
<Prop>
	<Name>orientation</Name>
	<Signature
		keyword="type"
		name="ListOrientation"
		allowedValues={["vertical", "horizontal"]}
	>
		<Default value="vertical" />
	</Signature>
	<Description>The list orientation.</Description>
</Prop>
<Prop>
	<Name>itemsRows</Name>
	<Signature keyword="number">
		<Default value={1} />
	</Signature>
	<Description
		>The list items content lines; it influences the height and how the text is
		showed. Cannot be higher than 3 or lower than 1.</Description
	>
</Prop>
<Prop>
	<Name>dense</Name>
	<Signature keyword="boolean">
		<Default value={false} />
	</Signature>
	<Description>If <code>true</code>, the items appear more compact.</Description
	>
</Prop>
<Prop>
	<Name>wrapFocus</Name>
	<Signature keyword="boolean">
		<Default value={true} />
	</Signature>
	<Description
		>Sets the list to allow the up arrow on the first element to focus the last
		element of the list and vice versa.</Description
	>
</Prop>
