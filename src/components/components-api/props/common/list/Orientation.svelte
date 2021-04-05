<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";

	export let name: string = "ListOrientation";
</script>

<Prop>
	<Name>orientation</Name>
	<Signature keyword="type" {name} allowedValues={["vertical", "horizontal"]}>
		<Default value="vertical" />
	</Signature>
	<Description>The list orientation.</Description>
</Prop>
