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

</script>

<Events>
	<Event>
		<Name>opened</Name>
		<Signature keyword="interface" name="OnDialogOpened" />
		<Description>
			Indicates when the dialog finishes its opening animation.
		</Description>
	</Event>
	<Event>
		<Name>closed</Name>
		<Signature keyword="interface" name="OnDialogClosed" />
		<Description>
			Indicates when the dialog finishes its closing animation.
		</Description>
	</Event>
	<Event>
		<Name>opening</Name>
		<Signature keyword="interface" name="OnDialogOpening" />
		<Description>
			Indicates when the dialog begins its opening animation.
		</Description>
	</Event>
	<Event>
		<Name>closing</Name>
		<Signature keyword="interface" name="OnDialogClosing" />
		<Description>
			Indicates when the dialog begins its closing animation.
		</Description>
	</Event>
</Events>
<BaseForwardedEvents />
