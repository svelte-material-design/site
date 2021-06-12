<svelte:options immutable={true} />

<script lang="ts">
	import { ExportedTags } from "src/components/components-api/sub-components";
	import {
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
	import {
		Content,
		Actions,
		ActionIcon,
		GenericIcon,
	} from "src/components/components-api/sub-components/common";
	import { ActionButton } from "src/components/components-api/sub-components/common/button";

</script>

<ExportedTags>
	<Content mandatory />
	<Actions indentation={1} />
	<ActionButton component="Snackbar" indentation={2} />
	<ActionIcon component="Snackbar" indentation={2} />
	<GenericIcon indentation={3} />
	<SubComponent indentation={2}>
		<Tag href="dismiss">Dismiss</Tag>
		<Description>The dismiss ("X") icon.</Description>
	</SubComponent>
</ExportedTags>
