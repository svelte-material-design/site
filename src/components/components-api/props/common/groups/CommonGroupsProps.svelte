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
</script>

<Prop>
	<Name readwrite>value</Name>
	<slot name="valueSignature">
		<Signature keyword="string[]">
			<Default value={[]} />
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
