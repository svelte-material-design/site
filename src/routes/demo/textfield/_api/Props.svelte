<svelte:options immutable={true} />

<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import { CommonMenuSurfaceProps } from "src/components/components-api/props/common/menu";
	import {
		BaseComponentProps,
		Dom,
	} from "src/components/components-api/props/common";
	import { CommonListProps } from "src/components/components-api/props/common/list";
</script>

<Props>
	<CommonMenuSurfaceProps
		tag="Menu"
		anchorName="MenuAnchor"
		anchorCornerName="MenuAnchorCorner"
		anchorMarginName="MenuAnchorMargin"
		variantName="MenuVariant"
	/>
	<CommonListProps
		tag="Menu"
		itemsStyleName="MenuItemsStyle"
		orientationName="MenuOrientation"
		valueName="MenuValue"
	/>
	<BaseComponentProps autoGeneratedId>
		<Dom instances={["HTMLDivElement"]} />
	</BaseComponentProps>
</Props>
