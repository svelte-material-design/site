<svelte:options immutable={true} />

<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import {
		CommonButtonProps,
		BaseActionButtonProps,
	} from "src/components/components-api/props/common/button";
	import {
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";

</script>

<Props>
	<Prop>
		<Name>type</Name>
		<Signature keyword="type" name="ActionType">
			<Default value={"primary"} />
		</Signature>
		<Description>
			Determine the <code>reason</code> value of the <code>on:closed</code> event.
		</Description>
	</Prop>
	<CommonButtonProps />
	<BaseActionButtonProps />
</Props>
