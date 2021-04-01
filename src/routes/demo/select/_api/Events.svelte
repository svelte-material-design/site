<svelte:options immutable={true} />

<script lang="ts">
	import { Events } from "src/components/components-api/events";
	import {
		BaseForwardedEvents,
		OnChange,
	} from "src/components/components-api/events/common";
</script>

<Events>
	<OnChange prop="value" name="OnSelectChange" native />
</Events>
<BaseForwardedEvents />
