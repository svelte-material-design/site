<svelte:options immutable={true} />

<script lang="ts">
	import {
		Event,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/events";
	import { CommonGroupsEvents } from "src/components/components-api/events/common/groups";

	export let changeName = "OnListChangeEvent";
	export let optionsName = "OnListChildrenChangeEvent";
	export let selectEvent = "action";
	export let selectName = "OnListChildrenChangeEvent";
</script>

<CommonGroupsEvents childrenTag="Item" {changeName} {optionsName} />
<Event>
	<Name>{selectEvent}</Name>
	<Signature keyword="interface" name={selectName} />
	<Description>Event fired when a child gets clicked.</Description>
</Event>
