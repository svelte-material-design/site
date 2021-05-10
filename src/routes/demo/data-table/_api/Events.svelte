<svelte:options immutable={true} />

<script lang="ts">
	import {
		Events,
		Event,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/events";
	import { BaseForwardedEvents } from "src/components/components-api/events/common";
	import { CommonGroupsEvents } from "src/components/components-api/events/common/groups";
</script>

<Events>
	<CommonGroupsEvents
		childrenTag="Row"
		changeName="OnDataTableSetChange"
		optionsName="OnDataTableChildrenChange"
	/>
	<Event>
		<Name>selectAll</Name>
		<Signature keyword="interface" name="OnDataTableAction" />
		<Description>
			Fired when the user select all items through the header checkbox.
		</Description>
	</Event>
	<Event>
		<Name>unselectAll</Name>
		<Signature keyword="interface" name="OnDataTableAction" />
		<Description>
			Fired when the user unselect all items through the header checkbox.
		</Description>
	</Event>
	<Event>
		<Name>sort</Name>
		<Signature keyword="interface" name="OnDataTableSort" />
		<Description>
			Fired when the user change the table sort through the
			<code>SortButton</code>.
		</Description>
	</Event>
</Events>
<BaseForwardedEvents />
