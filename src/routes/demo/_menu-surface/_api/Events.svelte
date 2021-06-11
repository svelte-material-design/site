<svelte:options immutable={true} />

<script lang="ts">
	import { Events } from "src/components/components-api/events";
	import { CommonMenuEvents } from "src/components/components-api/events/common/menu";
</script>

<Events>
	<CommonMenuEvents />
</Events>
