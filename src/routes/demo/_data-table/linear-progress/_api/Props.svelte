<svelte:options immutable={true} />

<script lang="ts">
	import { Closed } from "src/components/components-api/events/common/progress";
	import { Props } from "src/components/components-api/props";
	import {
		BaseComponentProps,
		Dom,
	} from "src/components/components-api/props/common";
</script>

<Props>
	<Closed />
	<BaseComponentProps>
		<Dom instances={["HTMLDivElement"]} />
	</BaseComponentProps>
</Props>
