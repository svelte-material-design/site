<script lang="ts">
	import {
		Prop,
		Name,
		Default,
		Description,
		Props,
		Signature,
	} from "src/components/components-api/props";
	import { Color, Ripple } from "src/components/components-api/props/common";
	import { Dom } from "src/components/components-api/props/common";
	import {
		BaseButtonProps,
		AccessibleTouch,
	} from "src/components/components-api/props/common/button";
</script>

<Props>
	<Prop>
		<Name>variant</Name>
		<Signature
			keyword="type"
			name="FabVariant"
			allowedValues={['"regular"', '"expanded"', '"mini"']}>
			<Default>"regular"</Default>
		</Signature>
		<Description>The variant to use.</Description>
	</Prop>
	<Color>
		<Signature
			keyword="type"
			name="FabColor"
			allowedValues={['"primary"', '"secondary"']}>
			<Default>"secondary"</Default>
		</Signature>
	</Color>
	<Ripple />
	<Prop>
		<Name>show</Name>
		<Signature keyword="boolean">
			<Default>true</Default>
		</Signature>
		<Description>If <code>false</code> the component is hidden.</Description>
	</Prop>
	<AccessibleTouch />
	<BaseButtonProps>
		<Dom instances={['HTMLButtonElement']} />
	</BaseButtonProps>
</Props>
