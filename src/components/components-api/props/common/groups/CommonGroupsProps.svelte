<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";
	import { Group } from ".";
	import { Value } from "src/components/components-api/props/common";

	export let multi: boolean = false;
	export let prop: string = "selected";
	export let groupComponent: string = undefined;
	export let configurable: boolean = false;
</script>

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
<Value readwrite>
	<slot name="valueSignature" slot="signature">
		<Signature keyword={multi ? "string[]" : "string"}>
			{#if multi}
				<Default value={[]} />
			{/if}
		</Signature>
	</slot>
	<slot name="valueDescription">
		The value{#if multi}(s){/if} of the {prop} item{#if multi}s{/if}.
	</slot>
</Value>
<Group {groupComponent} />
