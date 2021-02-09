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
		<Name>multiSelection</Name>
		<Signature keyword="boolean">
			<Default value={false} />
		</Signature>
		<Description
			>When <code>true</code>, more than one item can be selected.</Description
		>
	</Prop>
	<CommonListProps />
</Props>
