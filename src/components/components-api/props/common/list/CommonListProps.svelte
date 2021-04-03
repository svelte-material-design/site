<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";
	import { BaseListProps } from ".";
	import { CommonGroupsProps } from "../groups";

	export let tag: string = "List";
	export let valueName: string = "ListValue";
	export let itemsStyleName: string = "ListItemsStyle";
	export let orientationName: string = "ListOrientation";
</script>

<CommonGroupsProps configurable groupComponent={tag} multi>
	<svelte-fragment slot="valueSignature">
		<Signature
			keyword="type"
			name={valueName}
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
		name={itemsStyleName}
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
		name={orientationName}
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
<BaseListProps />
<Prop>
	<Name>typeahead</Name>
	<Signature keyword="boolean">
		<Default value={false} />
	</Signature>
	<Description>When <code>true</code> typeahead is enabled.</Description>
</Prop>
