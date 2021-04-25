<svelte:options immutable={true} />

<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import {
		BaseComponentProps,
		Dom,
	} from "src/components/components-api/props/common";
	import { CommonIconButtonProps } from "src/components/components-api/props/common/button";
</script>

<Props>
	<CommonIconButtonProps />
	<BaseComponentProps>
		<Dom instances={["HTMLButtonElement"]} />
	</BaseComponentProps>
</Props>
