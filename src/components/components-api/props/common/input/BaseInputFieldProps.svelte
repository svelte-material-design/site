<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Default,
		Name,
		Signature,
		Description,
	} from "src/components/components-api/props";
	import { Ripple } from "src/components/components-api/props/common";
</script>

<Ripple />
<Prop>
	<Name readwrite>invalid</Name>
	<Signature keyword="boolean">
		<Default value={false} />
	</Signature>
	<Description>When the input is invalid it's <code>true</code>.</Description>
</Prop>
