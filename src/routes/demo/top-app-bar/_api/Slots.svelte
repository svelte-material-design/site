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
	<Slot>
		<Name>content</Name>
		<Description
			>It's the content to show under the <code>{"<TopAppBar />"}</code
			>.</Description
		>
		<SlotProps>
			<SlotProp>
				<SlotPropName>className</SlotPropName>
				<Description>
					Class that fix the content position avoiding it to be hovered by the <code
						>{"<TopAppBar />"}</code
					>.
				</Description>
			</SlotProp>
		</SlotProps>
	</Slot>
</Slots>
