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
		BaseComponentProps,
		Dom,
	} from "src/components/components-api/props/common";
</script>

<Props target="main">
	<Prop>
		<Name>insetLeading</Name>
		<Signature keyword="boolean">
			<Default value={false} />
		</Signature>
		<Description>
			Increases the leading margin of the divider so that it does not intersect
			the leading element (the element on which is applied the <code
				>let:leadingClassName</code
			> value).
		</Description>
	</Prop>
	<Prop>
		<Name>insetTrailing</Name>
		<Signature keyword="boolean">
			<Default value={false} />
		</Signature>
		<Description>
			Increases the trailing margin of the divider so that it coincides with the
			item's padding.
		</Description>
	</Prop>
	<Prop>
		<Name>insetPadding</Name>
		<Signature keyword="boolean">
			<Default value={false} />
		</Signature>
		<Description>
			Alters the inset to correspond to the item's padding rather than the
			leading element. It can be set to <code>true</code> only when both
			<code>insetLeading</code>
			and
			<code>insetTrailing</code> are <code>true</code>.
		</Description>
	</Prop>
	<BaseComponentProps>
		<Dom instances={["HTMLLIElement"]} />
	</BaseComponentProps>
</Props>
