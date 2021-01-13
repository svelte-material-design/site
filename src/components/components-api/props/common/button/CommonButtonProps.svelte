<script lang="ts">
	import {
		Prop,
		Name,
		Default,
		Description,
		Props,
		Signature,
	} from "src/components/components-api/props";
	import {
		Ripple,
		Disabled,
		Color,
		Href,
	} from "src/components/components-api/props/common";
	import {
		BaseButtonProps,
		AccessibleTouch,
	} from "src/components/components-api/props/common/button";
</script>

<Prop>
	<Name>variant</Name>
	<Signature
		keyword="type"
		name="ButtonVariant"
		allowedValues={['text', 'raised', 'unelevated', 'outlined']}>
		<Default value="text" />
	</Signature>
	<Description>The variant to use.</Description>
</Prop>
<Color>
	<Signature
		keyword="type"
		name="ButtonColor"
		allowedValues={['primary', 'secondary']}>
		<Default value="primary" />
	</Signature>
</Color>
<Ripple />
<Disabled />
<AccessibleTouch />
