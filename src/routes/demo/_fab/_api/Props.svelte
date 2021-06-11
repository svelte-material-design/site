<svelte:options immutable={true} />

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
	import { Variant } from "src/components/components-api/props/common";

</script>

<Props>
	<Variant
		name="FabVariant"
		allowedValues={["regular", "expanded", "mini"]}
		defaultValue="regular"
	/>
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
