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

<Props>
	<Prop>
		<Name>pageSizeOptions</Name>
		<Signature keyword="number[]">
			<Default value={[10, 20, 50]} />
		</Signature>
		<Description>Options to populate the page size select.</Description>
	</Prop>
	<Prop>
		<Name readwrite>pageSize</Name>
		<Signature keyword="number">
			<Default>The first option</Default>
		</Signature>
		<Description>Set the current page.</Description>
	</Prop>
	<BaseComponentProps>
		<Dom instances={["HTMLDivElement"]} />
	</BaseComponentProps>
</Props>
