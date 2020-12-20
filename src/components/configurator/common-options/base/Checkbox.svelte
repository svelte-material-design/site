<script lang="ts">
	import { Checkbox } from "@smui/core/checkbox";
	import { FormField, Label } from "@smui/core/form-field";

	export let checked: boolean;
	export let label: string;
</script>

<div>
	<FormField>
		<Checkbox bind:checked />
		<Label>{label}</Label>
	</FormField>
</div>
