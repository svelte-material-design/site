<svelte:options immutable={true} />

<script lang="ts">
	import { Events } from "src/components/components-api/events";
	import { CommonButtonForwardedEvents } from "src/components/components-api/events/common/button";
	import { OnChange } from "src/components/components-api/events/common";
</script>

<Events>
	<OnChange prop="checked" name="OnRadioChangeEvent" native />
</Events>
<CommonButtonForwardedEvents />
