<script lang="ts">
	import { Events } from "src/components/components-api/events";
	import { CommonTopAppBarEvents } from "./common";
</script>

<Events>
	<svelte-fragment slot="table">
		<CommonTopAppBarEvents />
	</svelte-fragment>
</Events>
