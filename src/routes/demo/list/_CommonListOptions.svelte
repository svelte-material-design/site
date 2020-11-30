<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { Checkbox } from "@smui/core/checkbox";

	export let orientation: string;
	export let separator: boolean;
</script>

<svelte:options immutable={true} />

<div>
	<FormField>
		<Checkbox
			on:change={(event) => (orientation = event.detail.checked ? 'horizontal' : undefined)} />
		<Label>Horizontal</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={separator} on:change />
		<Label>Separator</Label>
	</FormField>
</div>
