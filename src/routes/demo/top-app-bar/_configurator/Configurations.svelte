<script lang="ts">
	import { Select } from "src/components/configurator/common-options/base";
	import type {
		TopAppBarVariant,
		TopAppBarColor,
	} from "@smui/core/top-app-bar";
	import { CommonTopAppBarConfigurations } from ".";

	export let variant: TopAppBarVariant = "standard";
	export let color: TopAppBarColor = "primary";
	export let prominent: boolean = false;
	export let dense: boolean = false;
</script>

<Select
	bind:value={variant}
	options={[{ value: 'standard', label: 'Standard' }, { value: 'fixed', label: 'fixed' }]}
	label="Variant" />
<CommonTopAppBarConfigurations bind:color bind:prominent bind:dense />
