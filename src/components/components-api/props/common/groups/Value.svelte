<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/props";

	export let groupComponent: string = undefined;
</script>

<Prop>
	<Name>value</Name>
	<Signature keyword="string" />
	<Description>
		<slot>
			Assign a value to the item. It is used by the parent <code
				>{`<${groupComponent} />`}</code
			> component to identify which item has been selected.
		</slot>
	</Description>
</Prop>
