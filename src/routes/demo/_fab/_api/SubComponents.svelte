<svelte:options immutable={true} />

<script lang="ts">
	import { ExportedTags } from "src/components/components-api/sub-components";
	import {
		GenericIcon,
		Label,
	} from "src/components/components-api/sub-components/common";

</script>

<ExportedTags>
	<GenericIcon>The icon of the FAB.</GenericIcon>
	<Label mandatory>
		The text of the FAB. To be used only when the
		<code>variant</code>
		is set to
		<code>"expanded"</code>.
	</Label>
</ExportedTags>
