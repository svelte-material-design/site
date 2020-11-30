<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { Checkbox } from "@smui/core/checkbox";

	export let multiSelection: boolean;
</script>

<svelte:options immutable={true} />

<div>
	<FormField>
		<Checkbox bind:checked={multiSelection} on:change />
		<Label>Multi selection</Label>
	</FormField>
</div>
