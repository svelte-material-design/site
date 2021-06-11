<svelte:options immutable={true} />

<script lang="ts">
	import { Href } from "src/components/components-api/props/common";
	import { Props } from "src/components/components-api/props";
	import {
		BaseItemProps,
		Activated,
	} from "src/components/components-api/props/common/list";
</script>

<Props>
	<Href />
	<Activated />
	<BaseItemProps elementType="HTMLLiElement" />
</Props>
