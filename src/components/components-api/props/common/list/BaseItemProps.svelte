<svelte:options immutable={true} />

<script lang="ts">
	import { Ripple } from "src/components/components-api/props/common";
	import { CommonInputProps } from "src/components/components-api/props/common/input";

	export let elementType: string = "ItemElement";
</script>

<Ripple />
<CommonInputProps
	autoGeneratedId
	groupComponent="List"
	instances={[elementType]}
	stylesTarget="main"
/>
