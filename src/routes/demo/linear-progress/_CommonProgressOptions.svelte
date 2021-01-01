<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { Checkbox } from "@smui/core/checkbox";

	export let reversed: boolean;
	export let closed: boolean;
	export let ariaLabel: string;

	let useAriaLabel: boolean;

	$: ariaLabel = useAriaLabel ? "progress" : undefined;
</script>

<div>
	<FormField>
		<Checkbox bind:checked={reversed} />
		<Label>Reversed</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={closed} />
		<Label>Closed</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={useAriaLabel} />
		<Label>Use aria label</Label>
	</FormField>
</div>
