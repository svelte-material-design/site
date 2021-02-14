<svelte:options immutable={true} />

<script lang="ts">
	import { CommonGroupsEvents } from "src/components/components-api/events/common/groups";

	export let changeName = "OnListChangeEvent";
	export let optionsName = "OnListChildrenChangeEvent";
</script>

<CommonGroupsEvents childrenTag="Item" {changeName} {optionsName} />
