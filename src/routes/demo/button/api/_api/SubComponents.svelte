<svelte:options immutable={true} />

<script lang="ts">
	import { ExportedTags } from "src/components/components-api/sub-components";
	import { ButtonSubComponents } from "src/components/components-api/sub-components/common/button";

</script>

<ExportedTags>
	<ButtonSubComponents component="Button" />
</ExportedTags>
