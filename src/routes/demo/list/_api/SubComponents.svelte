<script lang="ts">
	import {
		SubComponents,
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
</script>

<SubComponents>
	<SubComponent>
		<Tag href="item">Item</Tag>
		<Description>A list item.</Description>
	</SubComponent>
	<SubComponent indentation={1}>
		<Tag href="content">Content</Tag>
		<Description>The content of the list item.</Description>
	</SubComponent>
	<SubComponent indentation={2}>
		<Tag href="primary-text">PrimaryText</Tag>
		<Description>
			The list item primary text. Only one per item is allowed.
		</Description>
	</SubComponent>
	<SubComponent indentation={2}>
		<Tag href="secondary-text">SecondaryText</Tag>
		<Description>
			A list item secondary text. It must be used only with <code
				>itemsRows</code
			> greater than 1. Each secondary text will fill a row.
		</Description>
	</SubComponent>
	<SubComponent indentation={2}>
		<Tag href="icon">Icon</Tag>
		<Description>Can be used as both leading or trailing icon.</Description>
	</SubComponent>
	<SubComponent indentation={2}>
		<Tag href="checkbox">Checkbox</Tag>
		<Description>
			A checkbox which selection is syncronized with the list item. It must be
			used when <code>role</code> is <code>"group"</code>.
		</Description>
	</SubComponent>
	<SubComponent indentation={2}>
		<Tag href="radio">Radio</Tag>
		<Description>
			A radio which selection is syncronized with the list item. It must be used
			when <code>role</code> is <code>"radiogroup"</code>.
		</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="separator">Separator</Tag>
		<Description>A separator to be used between two items.</Description>
	</SubComponent>
</SubComponents>
