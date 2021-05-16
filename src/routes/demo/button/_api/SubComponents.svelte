<svelte:options immutable={true} />

<script lang="ts">
	import { SubComponents } from "src/components/components-api/sub-components";
	import {
		GenericIcon,
		Label,
	} from "src/components/components-api/sub-components/common";

</script>

<SubComponents>
	<Label mandatory component="Button" />
	<GenericIcon />
</SubComponents>
