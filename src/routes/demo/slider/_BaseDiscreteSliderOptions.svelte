<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { Checkbox } from "@smui/core/checkbox";

	export let tickMarks: boolean;
	export let hideValueIndicator: boolean;
	export let useValueText: boolean;
</script>

<div>
	<FormField>
		<Checkbox bind:checked={tickMarks} />
		<Label>Tick marks</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={hideValueIndicator} />
		<Label>Hide value indicator</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={useValueText} disabled={hideValueIndicator} />
		<Label>Use custom value text</Label>
	</FormField>
</div>
