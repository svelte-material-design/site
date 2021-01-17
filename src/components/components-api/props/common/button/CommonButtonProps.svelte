<script lang="ts">
	import {
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";
	import {
		Ripple,
		Disabled,
		Color,
	} from "src/components/components-api/props/common";
	import { AccessibleTouch } from "src/components/components-api/props/common";
</script>

<Prop>
	<Name>variant</Name>
	<Signature
		keyword="type"
		name="ButtonVariant"
		allowedValues={["text", "raised", "unelevated", "outlined"]}
	>
		<Default value="text" />
	</Signature>
	<Description>The variant to use.</Description>
</Prop>
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
