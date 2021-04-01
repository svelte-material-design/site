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
	import { Group } from "src/components/components-api/props/common/groups";
	import {
		BaseInputFieldProps,
		InputFieldWithVariantProps,
		InputFieldCommonProps,
	} from "src/components/components-api/props/common/input";
</script>

<Props>
	<BaseInputFieldProps />
	<InputFieldWithVariantProps />
	<Prop>
		<Name>readonly</Name>
		<Signature keyword="boolean">
			<Default value={false} />
		</Signature>
		<Description>
			Proxies the <code>readonly</code> standard HTML <code>input</code> attribute.
		</Description>
	</Prop>
	<Prop>
		<Name>required</Name>
		<Signature keyword="boolean">
			<Default value={false} />
		</Signature>
		<Description>
			Proxies the <code>required</code> standard HTML <code>input</code> attribute.
		</Description>
	</Prop>
	<Group />
	<InputFieldCommonProps />
</Props>
