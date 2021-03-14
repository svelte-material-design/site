<svelte:options immutable={true} />

<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import {
		BaseComponentProps,
		Dom,
	} from "src/components/components-api/props/common";
</script>

<Props>
	<BaseComponentProps>
		<Dom instances={["HTMLSpanElement"]} />
	</BaseComponentProps>
</Props>
