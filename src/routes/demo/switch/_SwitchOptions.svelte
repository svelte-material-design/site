<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { Checkbox } from "@smui/core/checkbox";

	export let checked: boolean;
	export let dirty: boolean;

	export let ripple: boolean = true;
	export let readonly: boolean;
	export let disabled: boolean;
	export let required: boolean;

	export let useLabel: boolean = true;
	export let useAriaLabel: boolean;
	export let useTitle: boolean;

	export let ariaLabel: string;
	$: ariaLabel = useAriaLabel ? "Label" : undefined;

	export let label: string;
	$: label = useLabel ? "Label" : undefined;

	export let title: string;
	$: title = useTitle ? "Title" : undefined;
</script>

<div>
	<FormField>
		<Checkbox bind:checked={ripple} on:change />
		<Label>Ripple</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={useLabel} on:change />
		<Label>Label</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked on:change />
		<Label>Checked</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={dirty} on:change />
		<Label>Dirty</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={readonly} on:change />
		<Label>Readonly</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={disabled} on:change />
		<Label>Disabled</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={useAriaLabel} on:change />
		<Label>Use aria label</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={useTitle} on:change />
		<Label>Use title</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={required} on:change />
		<Label>Required</Label>
	</FormField>
</div>
