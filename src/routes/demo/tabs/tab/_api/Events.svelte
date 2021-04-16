<svelte:options immutable={true} />

<script lang="ts">
	import { Events } from "src/components/components-api/events";
	import { BaseForwardedEvents } from "src/components/components-api/events/common";
	import { OnChange } from "src/components/components-api/events/common";
</script>

<Events>
	<OnChange prop="change" name="OnTabChange" />
</Events>
<BaseForwardedEvents />
