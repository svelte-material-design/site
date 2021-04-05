<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
		SubComponents,
	} from "src/components/components-api/sub-components";
	import { Content } from "src/components/components-api/sub-components/common";
	import { BaseInputFieldSubComponents } from "src/components/components-api/sub-components/common/input";
	import { CommonListSubComponents } from "src/components/components-api/sub-components/common/lists";
</script>

<SubComponents>
	<Content mandatory />
	<SubComponent indentation={1}>
		<Tag href="nav-list">NavList</Tag>
		<Description>A list containing the navigation items.</Description>
	</SubComponent>
	<CommonListSubComponents indentation={2} listItemRefLabel="nav item">
		<slot name="itemTag" slot="itemTag">
			<Tag href="nav-item">NavItem</Tag>
		</slot>
		<slot name="contentTag" slot="contentTag">
			<Tag href="nav-item-content">NavItemContent</Tag>
		</slot>
		<slot name="leadingIconTag" slot="leadingIconTag">
			<Tag href="nav-item-leading-icon">NavItemLeadingIcon</Tag>
		</slot>
		<slot name="trailingIconTag" slot="trailingIconTag">
			<Tag href="nav-item-trailing-icon">NavItemTrailingIcon</Tag>
		</slot>
	</CommonListSubComponents>
	<SubComponent>
		<Tag mandatory href="app-content">AppContent</Tag>
		<Description>The wrapper for the app content.</Description>
	</SubComponent>
</SubComponents>
