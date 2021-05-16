<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Default,
		Description,
		Props,
		Signature,
	} from "src/components/components-api/props";
	import {
		BaseComponentProps,
		Dom,
	} from "src/components/components-api/props/common";

</script>

<Props>
	<Prop>
		<Name>fullBleed</Name>
		<Signature keyword="boolean">
			<Default value={false} />
		</Signature>
		<Description>
			If
			<code>true</code>
			it can contain only 1 action that will fill the full width of the card.
		</Description>
	</Prop>
	<BaseComponentProps>
		<Dom instances={["HTMLDivElement"]} />
	</BaseComponentProps>
</Props>
