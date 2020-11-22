<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { Checkbox } from "@smui/core/checkbox";
	import { RangeSliderChangeEvent } from "@smui/core/slider";
	import LabelledRangeSlider from "src/components/LabelledRangeSlider.svelte";

	export let min: number;
	export let max: number;
	export let disabled: boolean;
	export let useTitle: boolean;
	export let useAriaLabel: boolean;

	let minMax: [number, number] = [min, max];

	function handleMinMaxChange(e: RangeSliderChangeEvent) {
		min = e.value[0];
		max = e.value[1];
	}
</script>

<div>
	<LabelledRangeSlider
		value={minMax}
		min={0}
		max={20}
		label="min/max"
		on:change={(e) => handleMinMaxChange(e.detail)} />
</div>
<div>
	<FormField>
		<Checkbox bind:checked={disabled} />
		<Label>Disabled</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={useTitle} />
		<Label>Title</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={useAriaLabel} />
		<Label>Use Aria Label</Label>
	</FormField>
</div>
