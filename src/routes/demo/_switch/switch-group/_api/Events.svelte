<svelte:options immutable={true} />

<script lang="ts">
	import { Events } from "src/components/components-api/events";
	import { CommonGroupsEvents } from "src/components/components-api/events/common/groups";

</script>

<Events>
	<CommonGroupsEvents
		childrenTag="Switch"
		changeName="OnSwitchGroupChange"
		optionsName="OnSwitchGroupChildrenChange"
	/>
</Events>
