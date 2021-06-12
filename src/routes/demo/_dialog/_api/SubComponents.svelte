<svelte:options immutable={true} />

<script lang="ts">
	import {
		ExportedTags,
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
	import {
		GenericIcon,
		Label,
	} from "src/components/components-api/sub-components/common";

</script>

<ExportedTags>
	<SubComponent>
		<Tag href="title">Title</Tag>
		<Description>Brief summary of the dialog's purpose.</Description>
	</SubComponent>
	<SubComponent>
		<Tag mandatory href="content">Content</Tag>
		<Description>
			Primary content area. May contain a list, a form, or prose.
		</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="actions">Actions</Tag>
		<Description>
			Footer area containing the dialog's action buttons.
		</Description>
	</SubComponent>
	<SubComponent indentation={1}>
		<Tag href="action">Action</Tag>
		<Description>Individual action button.</Description>
	</SubComponent>
	<Label mandatory indentation={2} component="Action" />
	<GenericIcon indentation={2} />
</ExportedTags>
