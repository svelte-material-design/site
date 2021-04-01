<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/props";

	export let groupComponent: string = undefined;
</script>

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
