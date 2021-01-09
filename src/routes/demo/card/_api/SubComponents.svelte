<script lang="ts">
	import {
		SubComponents,
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
</script>

<style>
</style>

<SubComponents>
	<SubComponent>
		<Tag href="content">Content</Tag>
		<Description>A container for the card text content.</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="title">Title</Tag>
		<Description>
			The content title. Underneath uses a
			<code>{'<Typography />'}</code>
			with variant
			<code>headline6</code>
		</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="subtitle">SubTitle</Tag>
		<Description>
			The content sub-title. Underneath uses a
			<code>{'<Typography />'}</code>
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
			<code>{'<Media />'}</code>
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
		<Tag href="action-icons">ActionIcons</Tag>
		<Description>A group of <code>{'<ActionIcon />'}</code>.</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="action-icon">ActionIcon</Tag>
		<Description>
			Like an
			<code>{'<IconButton />'}</code>
			but used as action for the card.
		</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="action-icon-toggle">ActionIconToggle</Tag>
		<Description>
			Like an
			<code>{'<IconButtonToggle />'}</code>
			but used as action for the card.
		</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="icon-on">IconOn</Tag>
		<Description>
			The icon to use when the
			<code>{'<IconButtonToggle />'}</code>
			is active.
		</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="icon-off">IconOff</Tag>
		<Description>
			The icon to use when the
			<code>{'<IconButtonToggle />'}</code>
			isn't active.
		</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="action-buttons">ActionButtons</Tag>
		<Description>A group of <code>{'<ActionButton />'}</code>.</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="action-button">ActionButton</Tag>
		<Description>
			Like a
			<code>{'<Button />'}</code>
			but used as action for the card.
		</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="label">Label</Tag>
		<Description>
			The label for the
			<code>{'<ActionButton />'}</code>.
		</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="icon">Icon</Tag>
		<Description>
			A generic icon that can be used for the
			<code>{'<ActionIcon />'}</code>
			or as both leading and trailing icon of the
			<code>{'<ActionButton />'}</code>.
		</Description>
	</SubComponent>
</SubComponents>
