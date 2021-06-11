<svelte:options immutable={true} />

<script lang="ts">
	import {
		ExportedTags,
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
	import {
		GenericIcon,
		Content,
		Actions,
	} from "src/components/components-api/sub-components/common";
	import { ActionButton } from "src/components/components-api/sub-components/common/button";

</script>

<ExportedTags>
	<SubComponent>
		<Tag href="">Banner</Tag>
		<Description />
	</SubComponent>
	<Content mandatory indentation={1} />
	<SubComponent indentation={2}>
		<Tag href="graphic">Graphic</Tag>
		<Description>
			Wraps the banner's <code>{`<Icon />`}</code>.
		</Description>
	</SubComponent>
	<GenericIcon indentation={3} />
	<SubComponent indentation={2}>
		<Tag href="text" mandatory>Text</Tag>
		<Description>The banner's text.</Description>
	</SubComponent>
	<Actions indentation={1} />
	<ActionButton component="Banner" indentation={2} />
</ExportedTags>
