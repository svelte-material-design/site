<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { Checkbox } from "@smui/core/checkbox";
	import { ListRole } from "@smui/core/list";

	export let listRole: ListRole | "listbox";
	export let selected: boolean;
	$: if (listRole === "list") {
		selected = false;
	}
</script>

<svelte:options immutable={true} />

<div>
	<FormField>
		<Checkbox
			bind:checked={selected}
			on:change
			disabled={listRole === 'list'} />
		<Label>Selected</Label>
	</FormField>
</div>
