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
		<Name>default</Name>
		<Signature keyword="boolean">
			<Default value={false} />
		</Signature>
		<Description>
			When <code>true</code> the dialog will focus on this action when opened.
			You should have only one <code>default</code> action in alternative one
			<code>initialFocus</code> item.
		</Description>
	</Prop>
	<Prop>
		<Name>action</Name>
		<Signature keyword="string">
			<Default value={"close"} />
		</Signature>
		<Description>
			Determine the <code>action</code> value of the <code>on:closed</code> event.
		</Description>
	</Prop>
	<CommonButtonProps />
	<BaseActionButtonProps />
</Props>
