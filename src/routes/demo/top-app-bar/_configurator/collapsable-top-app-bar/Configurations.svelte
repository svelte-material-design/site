<script lang="ts">
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/common-options/base";
	import type {
		TopAppBarVariant,
		TopAppBarColor,
	} from "@smui/core/top-app-bar";

	export let variant: TopAppBarVariant = "standard";
	export let color: TopAppBarColor = "primary";
	export let prominent: boolean = false;
	export let dense: boolean = false;
</script>

<Select
	bind:value={variant}
	options={[{ value: 'standard', label: 'Standard' }, { value: 'fixed', label: 'fixed' }]}
	label="Variant" />
<Select
	bind:value={color}
	options={[{ value: 'primary', label: 'Primary' }, { value: 'secondary', label: 'Secondary' }]}
	label="Color" />
<Checkbox bind:checked={prominent} label="Prominent" />
<Checkbox bind:checked={dense} label="Dense" />
