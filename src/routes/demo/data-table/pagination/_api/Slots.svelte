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
		<Name>counter</Name>
		<Description>The pagination counter text.</Description>
		<SlotProps>
			<SlotProp>
				<SlotPropName>first</SlotPropName>
				<Signature keyword="number" />
				<Description>
					Index of the first element in the current page.
				</Description>
			</SlotProp>
			<SlotProp>
				<SlotPropName>last</SlotPropName>
				<Signature keyword="number" />
				<Description>
					Index of the last element in the current page.
				</Description>
			</SlotProp>
			<SlotProp>
				<SlotPropName>pages</SlotPropName>
				<Signature keyword="number" />
				<Description>The total number of pages.</Description>
			</SlotProp>
			<SlotProp>
				<SlotPropName>page</SlotPropName>
				<Signature keyword="number" />
				<Description>The index of the current page.</Description>
			</SlotProp>
		</SlotProps>
	</Slot>
	<Slot>
		<Name>pageSize</Name>
		<Description>Allows the user to change the page size.</Description>
		<SlotProps>
			<SlotProp>
				<SlotPropName>setPageSize</SlotPropName>
				<Signature keyword="type" name="(size: number) => void" />
				<Description>Function to set the page size.</Description>
			</SlotProp>
		</SlotProps>
	</Slot>
</Slots>
