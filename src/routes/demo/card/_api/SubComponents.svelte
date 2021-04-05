<script lang="ts">
	import {
		SubComponents,
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
	import { Content } from "src/components/components-api/sub-components/common";
</script>

<SubComponents>
	<Content>A container for the card text content.</Content>
	<SubComponent>
		<Tag href="title">Title</Tag>
		<Description>
			The content title. Underneath uses a
			<code>{"<Typography />"}</code>
			with variant
			<code>headline6</code>
		</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="subtitle">SubTitle</Tag>
		<Description>
			The content sub-title. Underneath uses a
			<code>{"<Typography />"}</code>
			with variant
			<code>subtitle2</code>
		</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="media">Media</Tag>
		<Description>
			The image (or any other media content) of the card.
		</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="media-content">MediaContent</Tag>
		<Description>
			Wraps elements contained in the
			<code>{"<Media />"}</code>
			box.
		</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="primary-action">PrimaryAction</Tag>
		<Description>
			The clickable area that define a primary action for the card.
		</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="actions">Actions</Tag>
		<Description>
			The area containing the actions. Mandatory if any action component is
			used.
		</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="action-buttons">ActionButtons</Tag>
		<Description>A group of <code>{"<ActionButton />"}</code>.</Description>
	</SubComponent>
	<ActionButton />
	<SubComponent>
		<Tag href="action-icons">ActionIcons</Tag>
		<Description>A group of <code>{"<ActionIcon />"}</code>.</Description>
	</SubComponent>
	<ActionIcon />
	<GenericIcon />
</SubComponents>

<style>
</style>
