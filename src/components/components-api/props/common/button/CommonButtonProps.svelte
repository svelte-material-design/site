<svelte:options immutable={true} />

<script lang="ts">
	import { Default, Signature } from "src/components/components-api/props";
	import {
		Ripple,
		Disabled,
		Color,
	} from "src/components/components-api/props/common";
	import {
		AccessibleTouch,
		Variant,
	} from "src/components/components-api/props/common";

</script>

<Variant
	name="ButtonVariant"
	allowedValues={["text", "raised", "unelevated", "outlined"]}
/>
<Color>
	<Signature
		keyword="type"
		name="ButtonColor"
		allowedValues={["primary", "secondary"]}
	>
		<Default value="primary" />
	</Signature>
</Color>
<Ripple />
<Disabled />
<AccessibleTouch />
