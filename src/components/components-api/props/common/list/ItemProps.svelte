<svelte:options immutable={true} />

<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import { Value, Href } from "src/components/components-api/props/common";
	import {
		BaseItemProps,
		Activated,
	} from "src/components/components-api/props/common/list";
	import { Selected } from "src/components/components-api/props/common/groups";

	export let elementType: string = undefined;
</script>

<Props>
	<Value />
	<Href />
	<Activated />
	<Selected />
	<BaseItemProps {elementType} />
</Props>
