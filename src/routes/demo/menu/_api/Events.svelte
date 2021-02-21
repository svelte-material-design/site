<svelte:options immutable={true} />

<script lang="ts">
	import { Events } from "src/components/components-api/events";
	import { CommonMenuEvents } from "src/components/components-api/events/common/menu";
	import {
		CommonListForwardedEvents,
		CommonListEvents,
	} from "src/components/components-api/events/common/list";
</script>

<Events>
	<CommonListEvents
		changeName="OnMenuChangeEvent"
		optionsName="OnMenuChildrenChangeEvent"
		selectEvent="select"
		selectName="OnMenuSelect"
	/>
	<CommonMenuEvents />
</Events>
<CommonListForwardedEvents />
