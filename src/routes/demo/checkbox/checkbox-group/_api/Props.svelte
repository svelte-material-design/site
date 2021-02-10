<svelte:options immutable={true} />

<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import { CommonGroupsProps } from "src/components/components-api/props/common/groups";
</script>

<Props>
	<CommonGroupsProps prop="checked" groupComponent="CheckboxGroup" />
</Props>
