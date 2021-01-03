<script lang="ts">
	import { IconTypeOption, IconType } from ".";
	import { Checkbox } from "src/components/configurator/common-options/base";

	export let leadingIcon: IconType = undefined;
	export let leadingIconDisabled: boolean = false;
	export let trailingIcon: IconType = undefined;
	export let clickableLeadingIcon: boolean = false;
	export let clickableTrailingIcon: boolean = false;

	export let showClickableOptions: boolean = false;
</script>

<svelte:options immutable={true} />

<IconTypeOption
	bind:value={leadingIcon}
	label="Leading icon"
	allowEmpty
	disabled={leadingIconDisabled}
	on:change />
<IconTypeOption
	bind:value={trailingIcon}
	label="Trailing icon"
	allowEmpty
	on:change />
{#if showClickableOptions}
	<Checkbox
		bind:checked={clickableLeadingIcon}
		label="Clickable leading icon"
		disabled={!leadingIcon}
		on:change />
	<Checkbox
		bind:checked={clickableTrailingIcon}
		label="Clickable trailing icon"
		disabled={!trailingIcon}
		on:change />
{/if}
