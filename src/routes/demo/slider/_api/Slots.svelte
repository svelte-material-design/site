<script lang="ts">
	import {
		Slots,
		Slot,
		Name,
		Description,
		SlotProp,
		SlotPropName,
		SlotProps,
	} from "src/components/components-api/slots";
</script>

<Slots>
	<SlotProp>
		<SlotPropName>className</SlotPropName>
		<Description>
			Class that fix the content position avoiding it to be hovered by the <code
				>{"<TopAppBar />"}</code
			>.
		</Description>
	</SlotProp>
</Slots>
