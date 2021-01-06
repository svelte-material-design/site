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
	import { BaseButtonProps } from "src/components/components-api/props/common/button";
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
