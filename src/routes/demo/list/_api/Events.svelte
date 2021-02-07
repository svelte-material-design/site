<svelte:options immutable={true} />

<script lang="ts">
	import { Events, Signature } from "src/components/components-api/events";
	import { CommonGroupsEvents } from "src/components/components-api/events/common/groups";
	import { ForwardedEvents } from "src/components/components-api/events";
</script>

<Events>
	<CommonGroupsEvents childrenTag="Item">
		<svelte-fragment slot="valueSignature">
			<Signature
				keyword="type"
				name="ListValue"
				instances={["string", "string[]"]}
			/>
		</svelte-fragment>
	</CommonGroupsEvents>
</Events>
<ForwardedEvents
	events={[
		"click",
		"mousedown",
		"mouseup",
		"keydown",
		"keyup",
		"focusin",
		"focusout",
	]}
/>
