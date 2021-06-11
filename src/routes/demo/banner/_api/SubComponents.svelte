<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponents,
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

<SubComponents>
	<Content mandatory />
	<SubComponent indentation={1}>
		<Tag href="graphic">Graphic</Tag>
		<Description>
			Wraps the banner's <code>{`<Icon />`}</code>.
		</Description>
	</SubComponent>
	<GenericIcon indentation={2} />
	<SubComponent indentation={1}>
		<Tag href="text" mandatory>Text</Tag>
		<Description>The banner's text.</Description>
	</SubComponent>
	<Actions />
	<ActionButton component="Banner" indentation={1} />
</SubComponents>
