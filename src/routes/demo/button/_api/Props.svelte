<script lang="ts">
	import {
		Prop,
		Name,
		Signature,
		Default,
		Description,
		Props,
	} from "src/components/components-api/props";
	import {
		Ripple,
		Disabled,
		Color,
		Href,
	} from "src/components/components-api/common/props";
	import { BaseButtonProps } from "src/components/components-api/common/props/button";
</script>

<Props>
	<Prop>
		<Name>variant</Name>
		<Signature
			keyword="type"
			name="ButtonVariant"
			allowedValues={['"text"', '"raised"', '"unelevated"', '"outlined"']}>
			<Default>"text"</Default>
		</Signature>
		<Description>The variant to use.</Description>
	</Prop>
	<Ripple />
	<Disabled />
	<Color allowedValues={['"primary"', '"secondary"']} />
	<Href />
	<BaseButtonProps />
</Props>
