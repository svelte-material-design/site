<script lang="ts">
	import {
		SubComponents,
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
	import {
		ActionButton,
		ActionIcon,
		GenericIcon,
	} from "src/components/components-api/sub-components/common";
</script>

<SubComponents>
	<SubComponent>
		<Tag href="section">Section</Tag>
		<Description>A section of the Top App Bar.</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="title">Title</Tag>
		<Description>The Top App Bar title, only 1 must be used.</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="toolbar">Toolbar</Tag>
		<Description>A section of the Top App Bar containing actions.</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="navigation-icon">NavigationIcon</Tag>
		<Description>
			An
			<code>{"<IconButton />"}</code>
			meant to open a navigation menu (eg: a
			<code>{"<Drawer />"}</code>). Only 1 must be used.
		</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="navigation-button">NavigationButton</Tag>
		<Description>
			A
			<code>{"<Button />"}</code>
			meant to open a navigation menu (eg: a
			<code>{"<Drawer />"}</code>).

			<slot name="navigationButtonNote" />
			Only 1 must be used.
		</Description>
	</SubComponent>
	<ActionButton />
	<ActionIcon />
	<GenericIcon />
</SubComponents>
