<svelte:options immutable={true} />

<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import {
		BaseListProps,
		ItemsStyle,
		Orientation,
	} from "src/components/components-api/props/common/list";
	import {
		BaseComponentProps,
		Dom,
	} from "src/components/components-api/props/common";
</script>

<Props>
	<ItemsStyle />
	<Orientation />
	<BaseListProps maxItemsRows={2} />
	<BaseComponentProps autoGeneratedId>
		<Dom instances={["HTMLNavElement"]} />
	</BaseComponentProps>
</Props>
