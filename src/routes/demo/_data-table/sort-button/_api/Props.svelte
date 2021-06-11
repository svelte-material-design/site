<svelte:options immutable={true} />

<script lang="ts">
	import {
		Props,
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";
	import { Disabled } from "src/components/components-api/props/common";
	import {
		Ripple,
		AccessibleTouch,
	} from "src/components/components-api/props/common";
	import { InnerInputElementNotes } from "src/components/components-api/props/common/notes";
</script>

<Props>
	<Prop>
		<Name>direction</Name>
		<Signature keyword="type" name="SortDirection">
			<Default value={"none"} />
		</Signature>
		<Description>Determinate the arrow icon rotation.</Description>
	</Prop>
	<AccessibleTouch />
	<Ripple />
	<Disabled />
	<span slot="notes">
		<InnerInputElementNotes />
	</span>
</Props>
