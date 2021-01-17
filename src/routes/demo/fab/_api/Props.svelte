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
		Color,
		Ripple,
		AccessibleTouch,
	} from "src/components/components-api/props/common";
	import { Dom } from "src/components/components-api/props/common";
	import { BaseButtonProps } from "src/components/components-api/props/common/button";
</script>

<Props>
	<Prop>
		<Name>variant</Name>
		<Signature
			keyword="type"
			name="FabVariant"
			allowedValues={["regular", "expanded", "mini"]}
		>
			<Default value="regular" />
		</Signature>
		<Description>The variant to use.</Description>
	</Prop>
	<Color>
		<Signature
			keyword="type"
			name="FabColor"
			allowedValues={["primary", "secondary"]}
		>
			<Default value="secondary" />
		</Signature>
	</Color>
	<Ripple />
	<Prop>
		<Name>show</Name>
		<Signature keyword="boolean">
			<Default value={true} />
		</Signature>
		<Description>If <code>false</code> the component is hidden.</Description>
	</Prop>
	<AccessibleTouch />
	<BaseButtonProps>
		<Dom instances={["HTMLButtonElement"]} />
	</BaseButtonProps>
</Props>
