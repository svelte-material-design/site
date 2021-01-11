<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";

	export let indentation: number = 0;
</script>

<SubComponent {indentation}>
	<Tag href="action-icon">ActionIcon</Tag>
	<Description>
		Like an
		<code>{'<IconButton />'}</code>
		but used as action for the card.
	</Description>
</SubComponent>
<SubComponent {indentation}>
	<Tag href="action-icon-toggle">ActionIconToggle</Tag>
	<Description>
		Like an
		<code>{'<IconButtonToggle />'}</code>
		but used as action for the card.
	</Description>
</SubComponent>
<SubComponent indentation={indentation + 1}>
	<Tag href="icon-on">IconOn</Tag>
	<Description>
		The icon to use when the
		<code>{'<ActionIconToggle />'}</code>
		is active.
	</Description>
</SubComponent>
<SubComponent indentation={indentation + 1}>
	<Tag href="icon-off">IconOff</Tag>
	<Description>
		The icon to use when the
		<code>{'<ActionIconToggle />'}</code>
		isn't active.
	</Description>
</SubComponent>
