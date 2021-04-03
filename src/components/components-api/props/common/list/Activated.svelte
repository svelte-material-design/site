<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";
</script>

<Prop>
	<Name>activated</Name>
	<Signature keyword="boolean">
		<Default value={false} />
	</Signature>
	<Description>
		When <code>true</code> the component appears activated.
	</Description>
</Prop>
