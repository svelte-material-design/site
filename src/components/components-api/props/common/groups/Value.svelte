<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/props";

	export let groupComponent: string = undefined;
	export let native: boolean = false;
</script>

<Prop>
	<Name>value</Name>
	<Signature keyword="string" />
	<Description>
		<slot>
			Assign a value to the item.
			{#if native}
				The value passed to the inner native <code>{"<input />"}</code> element.
			{/if}
			It is used by the parent <code>{`<${groupComponent} />`}</code> component to
			identify which item has been selected.
		</slot>
	</Description>
</Prop>
