<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/props";

	export let tag: string;
</script>

<Prop>
	<Name>open</Name>
	<Signature keyword="boolean" />
	<Description
		>When <code>true</code> the <code>{`<${tag} />`}</code> is open.</Description
	>
</Prop>
