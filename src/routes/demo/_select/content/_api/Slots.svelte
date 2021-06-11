<svelte:options immutable={true} />

<script lang="ts">
	import {
		Slots,
		Description,
		Slot,
		Name,
	} from "src/components/components-api/slots";
</script>

<Slots>
	<Slot>
		<Name>default</Name>
		<Description
			>Here you must place the <code>{`<Options />`}</code> sub-component to show
			the select options.</Description
		>
	</Slot>
	<Slot>
		<Name>label</Name>
		<Description>The component label.</Description>
	</Slot>
	<Slot>
		<Name>leading</Name>
		<Description
			>The leading content, here you can place the <code
				>{`<LeadingIcon />`}</code
			> sub-component.</Description
		>
	</Slot>
</Slots>
