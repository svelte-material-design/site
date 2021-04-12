<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponents,
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
	import { GenericIcon } from "src/components/components-api/sub-components/common";
	import { CommonListSubComponents } from "src/components/components-api/sub-components/common/lists";
</script>

<SubComponents>
	<SubComponent>
		<Tag href="tab">Tab</Tag>
		<Description>A Tab item.</Description>
	</SubComponent>
	<SubComponent indentation={1}>
		<Tag href="content">Content</Tag>
		<Description>The tab main content.</Description>
	</SubComponent>
	<SubComponent indentation={2}>
		<Tag href="content">Label</Tag>
		<Description>The tab label.</Description>
	</SubComponent>
	<GenericIcon indentation={2} />
	<SubComponent indentation={1}>
		<Tag href="content">TabIndicator</Tag>
		<Description>The tab indicator.</Description>
	</SubComponent>
</SubComponents>
