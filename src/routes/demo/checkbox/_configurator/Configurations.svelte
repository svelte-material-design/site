<svelte:options immutable={true} />

<script lang="ts">
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/common-options/base";
	import { createEventDispatcher, tick } from "svelte";
	import { DensityOption } from "src/components/configurator/common-options";
	import { UseState } from "@raythurnevoid/svelte-hooks";

	export let checked: boolean;
	export let ripple: boolean;
	export let density: number;
	export let expandedTouchTarget: boolean;
	export let allowIndeterminated: boolean;
	export let disabled: boolean;
	export let readonly: boolean;
	export let required: boolean;

	let checkedState: UseState;
	let checkedStateValue: "checked" | "unchecked" | "indeterminate";
	let checkedOptions: { value: string; label: string }[];

	handleCheckedChange();

	const dispatch = createEventDispatcher<{
		change: void;
	}>();

	$: {
		checkedOptions = [
			{ value: "unchecked", label: "Unchecked" },
			{ value: "checked", label: "Checked" },
		];

		if (allowIndeterminated) {
			checkedOptions.push({ value: "indeterminate", label: "Indeterminate" });
			checkedOptions = [...checkedOptions];
		}
	}

	function handleCheckedSelectChange(_value: string) {
		const value = _value as "checked" | "unchecked" | "indeterminate";
		if (value === "checked" && checked !== true) {
			checked = true;
		} else if (value === "unchecked" && checked !== false) {
			checked = false;
		} else if (value === "indeterminate" && checked != null) {
			checked = null;
		}

		checkedState.setValue(checked);

		handleChange();
	}

	function handleCheckedChange() {
		checkedStateValue = checked
			? "checked"
			: checked === null
			? "indeterminate"
			: "unchecked";
	}

	function handleChange() {
		dispatch("change");
	}
</script>

<UseState
	bind:this={checkedState}
	value={checked}
	onUpdate={handleCheckedChange}
/>

<Select
	value={checkedStateValue}
	on:change={(event) => handleCheckedSelectChange(event.detail.value)}
	label="Checked value"
	options={checkedOptions}
	nullable={false}
/>
<div>
	<!-- <DensityOption bind:density on:change={handleChange} max={3} /> -->
</div>
<Checkbox bind:checked={ripple} label="Ripple" on:change={handleChange} />
<Checkbox
	bind:checked={expandedTouchTarget}
	label="Expanded touch target"
	on:change={handleChange}
/>
<Checkbox
	bind:checked={allowIndeterminated}
	label="Allow indeterminate"
	on:change={handleChange}
/>
<Checkbox bind:checked={disabled} label="Disabled" on:change={handleChange} />
<Checkbox bind:checked={readonly} label="Readonly" on:change={handleChange} />
<Checkbox bind:checked={required} label="Required" on:change={handleChange} />
