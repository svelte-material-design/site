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
		Href,
		Value,
		BaseComponentProps,
		Dom,
	} from "src/components/components-api/props/common";
	import { Ripple } from "src/components/components-api/props/common";
	import { Selected } from "src/components/components-api/props/common/groups";
</script>

<Props>
	<Ripple />
	<Href />
	<Selected />
	<Value />
	<Prop>
		<Name>stacked</Name>
		<Signature keyword="boolean">
			<Default value={false} />
		</Signature>
		<Description>
			Indicates that the tab icon and label should flow vertically instead of
			horizontally.
		</Description>
	</Prop>
	<Prop>
		<Name>useMinWidth</Name>
		<Signature keyword="boolean">
			<Default value={false} />
		</Signature>
		<Description>
			Indicates that the tab should shrink in size to be as narrow as possible
			without causing text to wrap.
		</Description>
	</Prop>
	<Prop>
		<Name>focusOnActivate</Name>
		<Signature keyword="boolean">
			<Default value={true} />
		</Signature>
		<Description>
			Sets whether the tab should focus itself when activated.
		</Description>
	</Prop>
	<BaseComponentProps>
		<slot>
			<Dom keyword="type" name="TabElement" instances={["HTMLButtonElement"]} />
		</slot>
	</BaseComponentProps>
</Props>
