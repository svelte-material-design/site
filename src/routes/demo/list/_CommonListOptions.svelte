<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { Checkbox } from "@smui/core/checkbox";
	import { Select, Option } from "@smui/core/select";
	import { ListType, ListItemsRows } from "@smui/core/list";
	import { createEventDispatcher, tick } from "svelte";
	import SliderOption from "src/components/configurator/common-options/base/SliderOption.svelte";

	export let orientation: string;
	export let separator: boolean;
	export let separatorInsetPadding: boolean;
	export let separatorInsetLeading: boolean;
	export let separatorInsetTrailing: boolean;
	export let type: ListType;
	export let itemsRows: ListItemsRows = 1;

	const dispatch = createEventDispatcher<{ change: any }>();

	$: if (!separator) {
		separatorInsetPadding = false;
		separatorInsetLeading = false;
		separatorInsetTrailing = false;
	}

	async function handleOrientationChange(checked: boolean) {
		orientation = checked ? "horizontal" : undefined;

		await tick();
		dispatch("change");
	}
</script>

<svelte:options immutable={true} />

<div>
	<FormField>
		<Select bind:value={type} nullable={false} on:change>
			<span slot="label">Type</span>
			<span slot="options">
				<Option value="textual">Textual list</Option>
				<Option value="image">Image list</Option>
				<Option value="icon">Icons list</Option>
				<Option value="avatar">Avatar list</Option>
				<Option value="thumbnail">Thumbnail list</Option>
				<Option value="video">Video list</Option>
			</span>
		</Select>
	</FormField>
</div>
<div>
	<SliderOption
		bind:value={itemsRows}
		min={1}
		max={3}
		step={1}
		label="Items rows" />
</div>
<div>
	<FormField>
		<Checkbox
			on:change={(event) => handleOrientationChange(event.detail.checked)} />
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
<div>
	<FormField>
		<Checkbox
			bind:checked={separatorInsetPadding}
			disabled={!separator || !separatorInsetLeading || !separatorInsetTrailing}
			on:change />
		<Label>Separator inset padding</Label>
	</FormField>
</div>
