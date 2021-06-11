<svelte:options immutable={true} />

<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import { Value } from "src/components/components-api/props/common";
	import { Selected } from "src/components/components-api/props/common/groups";
	import { BaseItemProps } from "src/components/components-api/props/common/list";
</script>

<Props>
	<Value />
	<Selected />
	<BaseItemProps elementType="HTMLLiElement" />
</Props>
