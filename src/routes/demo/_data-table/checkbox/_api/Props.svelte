<svelte:options immutable={true} />

<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import {
		Disabled,
		ReadOnly,
	} from "src/components/components-api/props/common";
	import {
		Ripple,
		AccessibleTouch,
	} from "src/components/components-api/props/common";
	import { InnerInputElementNotes } from "src/components/components-api/props/common/notes";
</script>

<Props>
	<AccessibleTouch />
	<Ripple />
	<ReadOnly />
	<Disabled />
	<span slot="notes">
		<InnerInputElementNotes />
	</span>
</Props>
