<svelte:options immutable={true} />

<script lang="ts">
	import { Props, Signature } from "src/components/components-api/props";
	import { CommonGroupsProps } from "src/components/components-api/props/common/groups";

</script>

<Props>
	<CommonGroupsProps
		prop="checked"
		showSelectionType
		selectionTypeName="SwitchGroupSelectionType"
		multi
		showGroup
		showNullable
		groupComponent="SwitchGroup"
	>
		<svelte:fragment slot="valueSignature">
			<Signature keyword="type" name="SwitchGroupValue" />
		</svelte:fragment>
	</CommonGroupsProps>
</Props>
