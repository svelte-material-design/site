<svelte:options immutable={true} />

<script lang="ts">
	import {
		Props,
		Prop,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/props";
	import {
		BaseComponentProps,
		Dom,
	} from "src/components/components-api/props/common";

</script>

<Props>
	<Prop>
		<Name mandatory>src</Name>
		<Signature keyword="string" />
		<Description>
			Proxy to the stadard html image <code>src</code> attribute.
		</Description>
	</Prop>
	<Prop>
		<Name mandatory>alt</Name>
		<Signature keyword="string" />
		<Description>
			Proxy to the stadard html image <code>alt</code> attribute.
		</Description>
	</Prop>
	<BaseComponentProps>
		<Dom instances={["HTMLImageElement"]} />
	</BaseComponentProps>
</Props>
