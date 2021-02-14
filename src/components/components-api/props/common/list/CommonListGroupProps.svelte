<svelte:options immutable={true} />

<script lang="ts">
	import { Signature } from "src/components/components-api/props";
	import { CommonGroupsProps } from "src/components/components-api/props/common/groups";
</script>

<CommonGroupsProps>
	<svelte-fragment slot="valueSignature">
		<Signature
			keyword="type"
			name="ListValue"
			instances={["string", "string[]"]}
		/>
	</svelte-fragment>
</CommonGroupsProps>
