<svelte:options immutable={true} />

<script lang="ts">
	import { SubComponents } from "src/components/components-api/sub-components";
	import { ButtonSubComponents } from "src/components/components-api/sub-components/common/button";

</script>

<SubComponents>
	<ButtonSubComponents component="Button" />
</SubComponents>
