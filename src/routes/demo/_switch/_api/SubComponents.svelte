<svelte:options immutable={true} />

<script lang="ts">
	import { ExportedTags } from "src/components/components-api/sub-components";
	import { Input } from "src/components/components-api/sub-components/common/input";

</script>

<ExportedTags>
	<Input mandatory />
</ExportedTags>
