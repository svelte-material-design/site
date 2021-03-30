<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponents,
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
	import { CommonListSubComponents } from "src/components/components-api/sub-components/common/lists";
</script>

<SubComponents>
	<SubComponent>
		<Tag href="selection-group">SelectionGroup</Tag>
		<Description>
			Menus can contain a group of list items that can represent the selection
			state of elements within the group.
		</Description>
	</SubComponent>
	<CommonListSubComponents>
		<svelte-fragment slot="item">
			<SubComponent indentation={2}>
				<Tag href="selection-group-icon">SelectionGroupIcon</Tag>
				<Description>
					Required when using a <code>SelectionGroup</code> to indicate which item
					is selected.
				</Description>
			</SubComponent>
		</svelte-fragment>
	</CommonListSubComponents>
</SubComponents>
