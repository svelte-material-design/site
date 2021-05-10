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
		<Name>alignEnd</Name>
		<Signature keyword="boolean">
			<Default value={false} />
		</Signature>
		<Description>
			When <code>true</code> the text is aligned to the end of the line.
		</Description>
	</Prop>
	<Prop>
		<Name>checkbox</Name>
		<Signature keyword="boolean">
			<Default value={false} />
		</Signature>
		<Description>
			It must be set to <code>true</code> when the cell is used to host a
			<code>{`<Checkbox />`}</code>.
		</Description>
	</Prop>
	<BaseComponentProps>
		<Dom instances={["HTMLTableCellElement"]} />
	</BaseComponentProps>
</Props>
