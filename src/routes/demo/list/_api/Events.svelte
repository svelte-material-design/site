<svelte:options immutable={true} />

<script lang="ts">
	import { Events } from "src/components/components-api/events";
	import {
		CommonListForwardedEvents,
		CommonListEvents,
	} from "src/components/components-api/events/common/list";
</script>

<Events>
	<CommonListEvents />
</Events>
<CommonListForwardedEvents />
