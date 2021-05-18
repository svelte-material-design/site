<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";

	export let name: string;
	export let allowedValues: string[];
	export let defaultValue: any = undefined;

</script>

<Prop>
	<Name>variant</Name>
	<Signature keyword="type" {name} {allowedValues}>
		{#if defaultValue}
			<Default value={defaultValue} />
		{/if}
	</Signature>
	<Description>
		<slot>The variant to use.</slot>
	</Description>
</Prop>
