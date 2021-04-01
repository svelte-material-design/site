<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/props";

	export let groupComponent: string = undefined;
	export let native: boolean | string = false;
</script>

<Prop>
	<Name readwrite>value</Name>
	<slot name="signature">
		<Signature keyword="string" />
	</slot>
	<Description>
		<slot>
			Assign a value to the component.
			{#if native}
				The value is passed to the inner native <code>
					{typeof native === "string" ? native : native ? "input" : undefined}
				</code> element.
			{/if}
			{#if groupComponent}
				It is used by the parent <code>{`<${groupComponent} />`}</code> component
				to identify which item has been selected.
			{/if}
		</slot>
	</Description>
</Prop>
