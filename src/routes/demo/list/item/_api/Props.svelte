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
	import { Ripple } from "src/components/components-api/props/common";
	import { Selected } from "src/components/components-api/props/common/groups";
	import { CommonInputProps } from "src/components/components-api/props/common/input";
</script>

<Props target="main">
	<Ripple />
	<Selected />
	<Prop>
		<Name>activated</Name>
		<Signature keyword="boolean">
			<Default value={false} />
		</Signature>
		<Description>
			When <code>true</code> the component appears activated.
		</Description>
	</Prop>
	<CommonInputProps
		autoGeneratedId
		stylesTarget="main"
		groupComponent="List"
		instances={["HTMLLIElement"]}
	/>
</Props>
