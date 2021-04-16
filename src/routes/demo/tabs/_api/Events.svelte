<svelte:options immutable={true} />

<script lang="ts">
	import { Events } from "src/components/components-api/events";
	import { BaseForwardedEvents } from "src/components/components-api/events/common";
	import { CommonGroupsEvents } from "src/components/components-api/events/common/groups";
</script>

<Events>
	<CommonGroupsEvents
		childrenTag="Tab"
		changeName="OnTabBarChange"
		optionsName="OnTabBarChildrenChange"
	/>
</Events>
<BaseForwardedEvents />
