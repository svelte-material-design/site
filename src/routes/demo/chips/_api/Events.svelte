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
		childrenTag="Tab"
		changeName="OnChipSetChange"
		optionsName="OnChipSetChildrenChange"
	/>
	<Event>
		<Name>interaction</Name>
		<Signature keyword="interface" name="OnChipSetInteraction" />
		<Description>
			Indicates the chip was interacted with (via click/tap or Enter key).
		</Description>
	</Event>
	<Event>
		<Name>selection</Name>
		<Signature keyword="interface" name="OnChipSetInteraction" />
		<Description>
			Indicates the chip's selection state has changed (for choice/filter
			chips).
		</Description>
	</Event>
	<Event>
		<Name>trailingIconInteraction</Name>
		<Signature keyword="interface" name="OnChipSetInteraction" />
		<Description>
			Indicates the chip's trailing icon was interacted with (via click/tap or
			Enter key).
		</Description>
	</Event>
	<Event>
		<Name>navigation</Name>
		<Signature keyword="interface" name="OnChipSetInteraction" />
		<Description>
			Indicates a navigation event has occurred on a chip.
		</Description>
	</Event>
</Events>
<BaseForwardedEvents />
