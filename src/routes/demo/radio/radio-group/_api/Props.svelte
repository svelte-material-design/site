<svelte:options immutable={true} />

<script lang="ts">
	import { Props, Signature } from "src/components/components-api/props";
	import { CommonGroupsProps } from "src/components/components-api/props/common/groups";
</script>

<Props>
	<CommonGroupsProps prop="checked" groupComponent="RadioGroup">
		<svelte-fragment slot="valueSignature">
			<Signature keyword="string" />
		</svelte-fragment>
	</CommonGroupsProps>
</Props>
