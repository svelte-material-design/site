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
		<Name>pageSize</Name>
		<Signature keyword="number">
			<Default value={10} />
		</Signature>
		<Description>
			Set the page size, can be omitted when the <code>PageSize</code> component
			is used.
		</Description>
	</Prop>
	<Prop>
		<Name readwrite>pageIndex</Name>
		<Signature keyword="number">
			<Default value={0} />
		</Signature>
		<Description>Set the current page.</Description>
	</Prop>
	<Prop>
		<Name>length</Name>
		<Signature keyword="number">
			<Default value={0} />
		</Signature>
		<Description>Set the total number of items to be paginated.</Description>
	</Prop>
	<Prop>
		<Name>firstPageBtn</Name>
		<Signature keyword="boolean">
			<Default value={true} />
		</Signature>
		<Description>Show the "go to first page" button.</Description>
	</Prop>
	<Prop>
		<Name>lastPageBtn</Name>
		<Signature keyword="boolean">
			<Default value={true} />
		</Signature>
		<Description>Show the "go to last page" button.</Description>
	</Prop>
	<BaseComponentProps>
		<Dom instances={["HTMLDivElement"]} />
	</BaseComponentProps>
</Props>
