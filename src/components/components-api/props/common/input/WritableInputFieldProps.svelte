<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Signature,
		Description,
	} from "src/components/components-api/props";
</script>

<Prop>
	<Name>customValidation</Name>
	<Signature keyword="type" name="GetHTMLValidationMsg" />
	<Description
		>A function that has to return a custom error message when the input is
		invalid.</Description
	>
</Prop>
