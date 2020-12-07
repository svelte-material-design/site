<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { Checkbox } from "@smui/core/checkbox";

	export let showSubHeader: boolean;
	export let showSeparator: boolean;
</script>

<svelte:options immutable={true} />

<div>
	<FormField>
		<Checkbox bind:checked={showSubHeader} on:change />
		<Label>Show sub header</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={showSeparator} on:change />
		<Label>Show separator</Label>
	</FormField>
</div>
