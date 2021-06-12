<svelte:options immutable={true} />

<script lang="ts">
	import {
		ExportedTags,
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
	import { GenericIcon } from "src/components/components-api/sub-components/common";
	import { Label } from "src/components/components-api/sub-components/common";

</script>

<ExportedTags>
	<SubComponent>
		<Tag href="tab">Tab</Tag>
		<Description>A Tab item.</Description>
	</SubComponent>
	<SubComponent indentation={1}>
		<Tag href="content">Content</Tag>
		<Description>The tab main content.</Description>
	</SubComponent>
	<Label mandatory indentation={2} component="Tab" />
	<GenericIcon indentation={2} />
	<SubComponent indentation={1}>
		<Tag href="tab-indicator">TabIndicator</Tag>
		<Description>The tab indicator.</Description>
	</SubComponent>
</ExportedTags>
