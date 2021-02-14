<svelte:options immutable={true} />

<script lang="ts">
	import { Events } from "src/components/components-api/events";
	import { CommonFocusableForwardedEvents } from "src/components/components-api/events/common";
	import { OnChange } from "src/components/components-api/events/common";
</script>

<Events>
	<OnChange prop="checked" name="OnCheckboxChangeEvent" native />
</Events>
<CommonFocusableForwardedEvents />
