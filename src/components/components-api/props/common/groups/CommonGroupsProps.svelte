<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";

	export let multi: boolean = false;
	export let prop: string = "selected";
	export let groupComponent: string = undefined;
	export let configurable: boolean = false;
</script>

<Prop>
	{#if configurable}
		<Prop>
			<Name>selectionType</Name>
			<Signature
				keyword="type"
				name="ListSelectionType"
				allowedValues={multi ? ["single", "multi"] : ["single"]}
			/>
			<Description>
				Define the <code>{`<${groupComponent} />`}</code> selection behaviour.
			</Description>
		</Prop>
		<Prop>
			<Name>nullable</Name>
			<Signature keyword="boolean">
				<Default value={true} />
			</Signature>
			<Description>
				When <code>false</code> the <code>{`<${groupComponent} />`}</code> will force
				at least 1 item selected.
			</Description>
		</Prop>
	{/if}
	<Name readwrite>value</Name>
	<slot name="valueSignature">
		<Signature keyword={multi ? "string[]" : "string"}>
			{#if multi}
				<Default value={[]} />
			{/if}
		</Signature>
	</slot>
	<Description>
		<slot name="valueDescription">
			The value{#if multi}(s){/if} of the {prop} item{#if multi}s{/if}.
		</slot>
	</Description>
</Prop>
<Prop>
	<Name>group</Name>
	<Signature keyword="SelectionGroupBinding" />
	<Description
		>This prop is useful when you want to redirect all related items to
		{#if groupComponent}
			a
			<code>{`<${groupComponent} />`}</code>
			or
		{/if}
		another
		<code>{"<SelectionGroup />"}</code> component.</Description
	>
</Prop>
