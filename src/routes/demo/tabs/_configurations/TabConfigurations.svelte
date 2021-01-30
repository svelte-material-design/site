<svelte:options immutable={true} />

<script lang="ts">
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import {
		IconTypeOption,
	} from "src/components/configurator/smui-components/icons";
	import type {
		IconType,
	} from "src/components/configurator/smui-components/icons";
	import { TabIndicatorPosition } from "../types";

	export let active: boolean = undefined;
	export let ripple: boolean = undefined;
	export let stacked: boolean = undefined;
	export let useMinWidth: boolean = undefined;
	export let tabIndicatorPosition: TabIndicatorPosition = undefined;
	export let trailingIcon: IconType = undefined;
	export let leadingIcon: IconType = undefined;
</script>

<Checkbox bind:checked={active} label="Active" on:change />
<Checkbox bind:checked={ripple} label="Ripple" on:change />
<Checkbox bind:checked={stacked} label="Stacked" on:change />
<Checkbox bind:checked={useMinWidth} label="Use min width" on:change />
<Select
	bind:value={tabIndicatorPosition}
	label="Tab indicator position"
	nullable={false}
	options={[
		{ label: "Under label", value: "label" },
		{ label: "Under tab", value: "tab" },
	]}
	on:change
/>
<IconTypeOption
	bind:value={leadingIcon}
	label="Leading icon"
	allowEmpty
	on:change
/>
<IconTypeOption
	bind:value={trailingIcon}
	label="Trailing icon"
	allowEmpty
	on:change
/>
