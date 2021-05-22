<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";
	import { BaseListProps, ItemsStyle, Orientation } from ".";
	import { CommonGroupsProps } from "../groups";

	export let tag: string = "List";
	export let valueName: string = "ListValue";
	export let itemsStyleName: string = "ListItemsStyle";
	export let orientationName: string = "ListOrientation";

</script>

<CommonGroupsProps
	showSelectionType
	showNullable
	groupComponent={tag}
	multi
	showGroup
>
	<svelte:fragment slot="valueSignature">
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
	</svelte:fragment>
</CommonGroupsProps>
<ItemsStyle name={itemsStyleName} />
<Orientation name={orientationName} />
<BaseListProps />
<Prop>
	<Name>typeahead</Name>
	<Signature keyword="boolean">
		<Default value={false} />
	</Signature>
	<Description>When <code>true</code> typeahead is enabled.</Description>
</Prop>
