<svelte:options immutable={true} />

<script lang="ts">
	import { SubComponents } from "src/components/components-api/sub-components";
	import {
		GenericIcon,
		Label,
	} from "src/components/components-api/sub-components/common";

</script>

<SubComponents>
	<GenericIcon>The icon of the FAB.</GenericIcon>
	<Label mandatory>
		The text of the FAB. To be used only when the
		<code>variant</code>
		is set to
		<code>"expanded"</code>.
	</Label>
</SubComponents>
