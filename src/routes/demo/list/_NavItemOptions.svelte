<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { Checkbox } from "@smui/core/checkbox";

	export let activated: boolean;
</script>

<svelte:options immutable={true} />

<div>
	<FormField>
		<Checkbox bind:checked={activated} on:change />
		<Label>Activated</Label>
	</FormField>
</div>
