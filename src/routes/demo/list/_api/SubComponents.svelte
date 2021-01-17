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
		<Tag mandatory href="label">Label</Tag>
		<Description>The text of the button.</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="icon">Icon</Tag>
		<Description>It can be used as both leading and trailing icon.</Description>
	</SubComponent>
</SubComponents>
