<svelte:options immutable={true} />

<script lang="ts">
	import {
		Slots,
		Description,
		SlotProps,
		SlotProp,
		SlotPropName,
		Signature,
		Slot,
		Name,
	} from "src/components/components-api/slots";
</script>

<Slots>
	<Slot>
		<Name>default</Name>
		<Description>Item's content.</Description>
		<SlotProps>
			<SlotProp>
				<SlotPropName>selected</SlotPropName>
				<Signature keyword="boolean" />
				<Description>
					It's <code>true</code> when selected.
				</Description>
			</SlotProp>
			<SlotProp>
				<SlotPropName>activated</SlotPropName>
				<Signature keyword="boolean" />
				<Description>
					It's <code>true</code> when activated.
				</Description>
			</SlotProp>
			<SlotProp>
				<SlotPropName>leadingClassName</SlotPropName>
				<Signature keyword="string" />
				<Description>
					ClassName to use when placing an element as leading content.
				</Description>
			</SlotProp>
			<SlotProp>
				<SlotPropName>trailingClassName</SlotPropName>
				<Signature keyword="string" />
				<Description>
					ClassName to use when placing an element as trailing content.
				</Description>
			</SlotProp>
		</SlotProps>
	</Slot>
</Slots>
