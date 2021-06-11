<svelte:options immutable={true} />

<script lang="ts">
	import { Events } from "src/components/components-api/events";
	import {
		BaseForwardedEvents,
		OnChange,
		OnInput,
	} from "src/components/components-api/events/common";
</script>

<Events>
	<OnChange prop="value" name="OnInputFieldChange" native />
	<OnInput prop="value" name="OnInputFieldInput" />
</Events>
<BaseForwardedEvents />
