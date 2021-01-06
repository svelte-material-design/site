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
		<Tag mandatory href="icon-on">IconOn</Tag>
		<Description>The icon to show when the button is active.</Description>
	</SubComponent>
	<SubComponent>
		<Tag mandatory href="icon-off">IconOff</Tag>
		<Description>The icon to show when the button isn't active.</Description>
	</SubComponent>
</SubComponents>
