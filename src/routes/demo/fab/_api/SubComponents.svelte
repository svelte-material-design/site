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
		<Tag href="icon">Icon</Tag>
		<Description>The icon fo the FAB.</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="label">Label</Tag>
		<Description>
			The text of the FAB. To be used only when the
			<code>variant</code>
			is set to
			<code>"expanded"</code>.
		</Description>
	</SubComponent>
</SubComponents>
