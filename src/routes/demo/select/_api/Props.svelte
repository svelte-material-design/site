<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Default,
		Name,
		Signature,
		Description,
	} from "src/components/components-api/props";
	import { Variant } from "src/components/components-api/props/common";
	import { BaseInputFieldProps } from "src/components/components-api/props/common/input";
</script>

<BaseInputFieldProps>
	<Variant name="InputFieldVariant" allowedValues={["filled", "outlined"]} />
	<Prop>
		<Name>lineRipple</Name>
		<Signature keyword="boolean">
			<Default value={true} />
		</Signature>
		<Description>
			When <code>true</code>, the line ripple is showed.
		</Description>
	</Prop>
	<Prop>
		<Name>type</Name>
		<Signature keyword="type" name="InputFieldType">
			<Default value={"text"} />
		</Signature>
		<Description>
			When the input is invalid it's <code>true</code>.
		</Description>
	</Prop>
</BaseInputFieldProps>
