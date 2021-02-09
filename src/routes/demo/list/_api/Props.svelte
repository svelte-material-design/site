<svelte:options immutable={true} />

<script lang="ts">
	import {
		Props,
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";
	import { CommonListProps } from "src/components/components-api/props/common/list";
</script>

<Props>
	<Prop>
		<Name>role</Name>
		<Signature
			keyword="type"
			name="ListRole"
			allowedValues={["list", "radiogroup", "group"]}
		>
			<Default value="list" />
		</Signature>
		<Description
			>The list role style. It influences the list behaviour.</Description
		>
	</Prop>
	<CommonListProps />
</Props>
