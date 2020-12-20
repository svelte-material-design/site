<script lang="ts">
	import { Checkbox } from "src/components/configurator/common-options/base";
	import {
		IconType,
		IconTypeOption,
	} from "src/components/configurator/smui-components/icons";
	import { TimeoutMs } from "./_configurations";

	export let open: boolean = undefined;
	export let timeoutMs: number = undefined;
	export let stacked: boolean = undefined;
	export let leading: boolean = undefined;
	export let closeOnEscape: boolean = true;

	export let showActionBtn: boolean = undefined;
	export let actionRipple: boolean = undefined;
	export let iconActionType: IconType = undefined;
	export let iconActionRipple: boolean = undefined;
	export let showDismiss: boolean = undefined;
	export let dismissRipple: boolean = undefined;
</script>

<svelte:options immutable={true} />

<Checkbox bind:checked={open} label="Open" />
<TimeoutMs bind:value={timeoutMs} />
<Checkbox bind:checked={stacked} label="Stacked" />
<Checkbox bind:checked={leading} label="Leading" />
<Checkbox bind:checked={closeOnEscape} label="Close on escape" />
<div />
<Checkbox bind:checked={showActionBtn} label="Show action" />
<Checkbox bind:checked={actionRipple} label="Action ripple" />
<IconTypeOption bind:value={iconActionType} allowEmpty label="Icon action" />
<Checkbox bind:checked={iconActionRipple} label="Icon action ripple" />
<Checkbox bind:checked={showDismiss} label="Show dismiss" />
<Checkbox bind:checked={dismissRipple} label="Dismiss ripple" />
