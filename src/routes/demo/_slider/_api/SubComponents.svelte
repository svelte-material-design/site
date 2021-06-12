<script lang="ts">
	import {
		ExportedTags,
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";

</script>

<ExportedTags>
	<SubComponent>
		<Tag mandatory href="range">Range</Tag>
		<Description
			>A component that wraps and allow to configure a slider <code
				>{`<Thumb />`}</code
			>. Up to 2 of this can be used, this is useful when you need a range of 2
			values in the slider.</Description
		>
	</SubComponent>
	<SubComponent indentation={1}>
		<Tag mandatory href="thumb">Thumb</Tag>
		<Description
			>A thumb for the slider. <slot name="thumbDescription" /></Description
		>
	</SubComponent>
</ExportedTags>
