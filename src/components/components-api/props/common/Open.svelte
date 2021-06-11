<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/props";

	export let tag: string = undefined;
	export let readwrite: boolean = false;

</script>

<Prop>
	<Name {readwrite}>open</Name>
	<Signature keyword="boolean" />
	<Description>
		When <code>true</code> the
		{#if tag}
			<code>{`<${tag} />`}</code>
		{:else}
			component
		{/if}
		is open.
	</Description>
</Prop>
