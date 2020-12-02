<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { Checkbox } from "@smui/core/checkbox";
	import { Select, Option } from "@smui/core/select";
	import { ListType } from "@smui/core/list";
	import { createEventDispatcher } from "svelte";

	export let orientation: string;
	export let separator: boolean;
	export let separatorInsetPadding: boolean;
	export let separatorInsetLeading: boolean;
	export let separatorInsetTrailing: boolean;
	export let type: ListType;

	const dispatch = createEventDispatcher<{
		change: any;
	}>();

	$: if (!separator) {
		separatorInsetPadding = false;
		separatorInsetLeading = false;
		separatorInsetTrailing = false;
	}

	function handleTypeChange(value: string) {
		type = value as ListType;
		dispatch("change");
	}
</script>

<svelte:options immutable={true} />

<div>
	<FormField>
		<Select
			value={type || 'textual'}
			nullable={false}
			on:change={(event) => handleTypeChange(event.detail.value)}>
			<span slot="label">Type</span>
			<span slot="options">
				<Option value="textual">Textual list</Option>
				<Option value="image">Image list</Option>
				<Option value="icon">Icons list</Option>
			</span>
		</Select>
	</FormField>
</div>
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
<div>
	<FormField>
		<Checkbox
			bind:checked={separatorInsetPadding}
			disabled={!separator}
			on:change />
		<Label>Separator inset padding</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox
			bind:checked={separatorInsetLeading}
			disabled={!separator}
			on:change />
		<Label>Separator inset leading</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox
			bind:checked={separatorInsetTrailing}
			disabled={!separator}
			on:change />
		<Label>Separator inset trailing</Label>
	</FormField>
</div>
