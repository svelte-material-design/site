<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponents,
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
	import { Label } from "src/components/components-api/sub-components/common";

</script>

<SubComponents>
	<SubComponent>
		<Tag href="item">Item</Tag>
		<Description>Image list's item.</Description>
	</SubComponent>
	<SubComponent indentation={1}>
		<Tag href="image-aspect-container">ImageAspectContainer</Tag>
		<Description>
			Parent of each item's image element, responsible for constraining aspect
			ratio. This element may be omitted entirely if images are already sized to
			the correct aspect ratio.
		</Description>
	</SubComponent>
	<SubComponent indentation={2}>
		<Tag mandatory href="image">Image</Tag>
		<Description>The image element in each item.</Description>
	</SubComponent>
	<SubComponent indentation={2}>
		<Tag href="supporting">Supporting</Tag>
		<Description>
			The area within each item containing the supporting text label.
		</Description>
	</SubComponent>
	<Label indentation={3} component="Image" />
</SubComponents>
