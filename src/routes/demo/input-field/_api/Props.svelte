<svelte:options immutable={true} />

<script lang="ts">
	import {
		Props,
		Prop,
		Default,
		Name,
		Signature,
		Description,
	} from "src/components/components-api/props";
	import {
		BaseInputFieldProps,
		InputFieldWithVariantProps,
		WritableInputFieldProps,
		InputFieldCommonProps,
	} from "src/components/components-api/props/common/input";
</script>

<Props>
	<BaseInputFieldProps />
	<InputFieldWithVariantProps />
	<WritableInputFieldProps />
	<Prop>
		<Name>type</Name>
		<Signature keyword="type" name="InputFieldType">
			<Default value={"text"} />
		</Signature>
		<Description>
			When the input is invalid it's <code>true</code>.
		</Description>
	</Prop>
	<InputFieldCommonProps />
</Props>
