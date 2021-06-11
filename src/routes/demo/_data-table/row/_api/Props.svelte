<svelte:options immutable={true} />

<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import { Value } from "src/components/components-api/props/common";
	import { Selected } from "src/components/components-api/props/common/groups";
	import {
		BaseComponentProps,
		Dom,
	} from "src/components/components-api/props/common";
</script>

<Props>
	<Value />
	<Selected />
	<BaseComponentProps>
		<Dom instances={["HTMLTableRowElement"]} />
	</BaseComponentProps>
</Props>
