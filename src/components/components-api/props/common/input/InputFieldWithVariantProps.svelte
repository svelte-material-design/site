<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Default,
		Name,
		Signature,
		Description,
	} from "src/components/components-api/props";
	import { Variant } from "src/components/components-api/props/common";

</script>

<Variant
	name="InputFieldVariant"
	allowedValues={["filled", "outlined"]}
	defaultValue="filled"
/>
<Prop>
	<Name>lineRipple</Name>
	<Signature keyword="boolean">
		<Default value={true} />
	</Signature>
	<Description>
		When <code>true</code>, the line ripple is showed.
	</Description>
</Prop>
