<svelte:options immutable={true} />

<script lang="ts">
	import { SubComponents } from "src/components/components-api/sub-components";
	import { Input } from "src/components/components-api/sub-components/common/input";

</script>

<SubComponents>
	<Input mandatory />
</SubComponents>
