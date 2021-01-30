<svelte:options immutable={true} />

<script lang="ts">
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { Section } from "src/components/configurator/molecules/configurations";
	import type { CheckboxConfigurations } from "./types";

	export let configurations: CheckboxConfigurations;

	let checkedState: UseState;
	let checkedStateValue: "checked" | "unchecked" | "indeterminate";
	let checkedOptions: { value: string; label: string }[];

	handleCheckedChange();

	$: {
		checkedOptions = [
			{ value: "unchecked", label: "Unchecked" },
			{ value: "checked", label: "Checked" },
		];

		if (configurations.allowIndeterminated) {
			checkedOptions.push({ value: "indeterminate", label: "Indeterminate" });
			checkedOptions = [...checkedOptions];
		}
	}

	function handleCheckedSelectChange(_value: string) {
		const value = _value as "checked" | "unchecked" | "indeterminate";
		if (value === "checked" && configurations.checked !== true) {
			configurations.checked = true;
		} else if (value === "unchecked" && configurations.checked !== false) {
			configurations.checked = false;
		} else if (value === "indeterminate" && configurations.checked != null) {
			configurations.checked = null;
		}

		checkedState.setValue(configurations.checked);

		handleChange();
	}

	function handleCheckedChange() {
		checkedStateValue = configurations.checked
			? "checked"
			: configurations.checked === null
			? "indeterminate"
			: "unchecked";
	}

	function handleChange() {
		configurations = { ...configurations };
	}
</script>

<UseState
	bind:this={checkedState}
	value={configurations.checked}
	onUpdate={handleCheckedChange}
/>

<Section>
	<Select
		value={checkedStateValue}
		label="Checked value"
		options={checkedOptions}
		nullable={false}
		on:change={(event) => handleCheckedSelectChange(event.detail.value)}
		on:change
	/>
</Section>
<Section>
	<Checkbox
		bind:checked={configurations.ripple}
		label="Ripple"
		on:change={handleChange}
		on:change
	/>
	<Checkbox
		bind:checked={configurations.accessibleTouch}
		label="Accessible touch"
		on:change={handleChange}
		on:change
	/>
	<Checkbox
		bind:checked={configurations.allowIndeterminated}
		label="Allow indeterminate"
		on:change={handleChange}
		on:change
	/>
	<Checkbox
		bind:checked={configurations.disabled}
		label="Disabled"
		on:change={handleChange}
		on:change
	/>
	<Checkbox
		bind:checked={configurations.readonly}
		label="Readonly"
		on:change={handleChange}
		on:change
	/>
</Section>
