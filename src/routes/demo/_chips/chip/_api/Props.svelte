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
	import {
		Value,
		BaseComponentProps,
		AccessibleTouch,
		Dom,
	} from "src/components/components-api/props/common";
	import { Ripple } from "src/components/components-api/props/common";
	import { Selected } from "src/components/components-api/props/common/groups";
</script>

<Props>
	<Ripple />
	<Selected />
	<Value />
	<AccessibleTouch />
	<Prop>
		<Name>hideLeadingIconOnSelect</Name>
		<Signature keyword="boolean">
			<Default value={false} />
		</Signature>
		<Description>
			When <code>true</code> the leading icon is hidden on chip selection.
		</Description>
	</Prop>
	<BaseComponentProps>
		<slot>
			<Dom keyword="type" name="TabElement" instances={["HTMLButtonElement"]} />
		</slot>
	</BaseComponentProps>
</Props>
