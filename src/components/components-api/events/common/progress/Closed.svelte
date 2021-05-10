<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Default,
		Name,
		Signature,
		Description,
	} from "src/components/components-api/props";
</script>

<Prop>
	<Name readwrite>closed</Name>
	<Signature keyword="boolean">
		<Default value={false} />
	</Signature>
	<Description>When true the proess is hidden.</Description>
</Prop>
