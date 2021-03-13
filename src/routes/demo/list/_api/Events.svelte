<svelte:options immutable={true} />

<script lang="ts">
	import { Events } from "src/components/components-api/events";
	import { BaseForwardedEvents } from "src/components/components-api/events/common";
	import { CommonListEvents } from "src/components/components-api/events/common/list";
</script>

<Events>
	<CommonListEvents />
</Events>
<BaseForwardedEvents />
