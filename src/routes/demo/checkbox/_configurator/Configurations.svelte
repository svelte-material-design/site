<svelte:options immutable={true} />

<script lang="ts">
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import { onMount } from "svelte";

	const { configurations$ } = getConfiguratorContext();

	let checkedState: UseState;
	let checkedStateValue: "checked" | "unchecked" | "indeterminate";
	let checkedOptions: { value: string; label: string }[];

	onMount(() => {
		handleCheckedChange();
		updateInstance();
	});

	handleCheckedChange();

	$: {
		checkedOptions = [
			{ value: "unchecked", label: "Unchecked" },
			{ value: "checked", label: "Checked" },
		];

		if ($configurations$.allowIndeterminated) {
			checkedOptions.push({ value: "indeterminate", label: "Indeterminate" });
			checkedOptions = [...checkedOptions];
		}
	}

	function handleCheckedSelectChange(_value: string) {
		const value = _value as "checked" | "unchecked" | "indeterminate";
		if (value === "checked" && $configurations$.checked !== true) {
			$configurations$.checked = true;
		} else if (value === "unchecked" && $configurations$.checked !== false) {
			$configurations$.checked = false;
		} else if (value === "indeterminate" && $configurations$.checked != null) {
			$configurations$.checked = null;
		}

		checkedState.setValue($configurations$.checked);
	}

	function handleCheckedChange() {
		checkedStateValue = $configurations$.checked
			? "checked"
			: $configurations$.checked === null
			? "indeterminate"
			: "unchecked";
	}

	function updateInstance() {
		$configurations$ = { ...$configurations$ };
	}
</script>

<UseState
	bind:this={checkedState}
	value={$configurations$.checked}
	onUpdate={handleCheckedChange}
/>

<Section>
	<Select
		value={checkedStateValue}
		label="Checked value"
		options={checkedOptions}
		nullable={false}
		on:change={(event) => handleCheckedSelectChange(event.detail.value)}
		on:change={updateInstance}
	/>
</Section>
<Section>
	<Checkbox
		bind:checked={$configurations$.ripple}
		label="Ripple"
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={$configurations$.accessibleTouch}
		label="Accessible touch"
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={$configurations$.allowIndeterminated}
		label="Allow indeterminate"
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={$configurations$.disabled}
		label="Disabled"
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={$configurations$.readonly}
		label="Readonly"
		on:change={updateInstance}
	/>
</Section>
