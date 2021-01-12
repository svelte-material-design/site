<script lang="ts">
	import {
		Events,
		Event,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/events";
	import { CommonTopAppBarEvents } from "../../_api/common";
</script>

<Events>
	<svelte-fragment slot="table">
		<Event>
			<Name>change</Name>
			<Signature keyword="type" name="OnTopAppBarCollapsedChange" />
			<Description>
				Event fired when the
				<code>collapsed</code>
				value change following a user scroll action.
			</Description>
		</Event>
		<CommonTopAppBarEvents />
	</svelte-fragment>
</Events>
