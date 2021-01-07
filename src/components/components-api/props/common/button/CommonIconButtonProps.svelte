<script lang="ts">
	import { Signature } from "src/components/components-api/events";
	import {
		Ripple,
		Disabled,
		Color,
	} from "src/components/components-api/props/common";
	import { Default } from "src/components/components-api/props";
</script>

<Ripple />
<Disabled />
<Color>
	<Signature
		keyword="type"
		name="IconButtonColor"
		allowedValues={['"inherit"', '"primary"', '"secondary"']}>
		<Default>"inherit"</Default>
	</Signature>
</Color>
