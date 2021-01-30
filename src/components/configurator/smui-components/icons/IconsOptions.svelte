<svelte:options immutable={true} />

<script lang="ts">
	import type { IconType } from ".";
	import { IconTypeOption } from ".";
	import { Checkbox } from "src/components/configurator/atoms/configurations";

	export let leadingIcon: IconType = undefined;
	export let leadingIconDisabled: boolean = false;
	export let trailingIcon: IconType = undefined;
	export let clickableLeadingIcon: boolean = false;
	export let clickableTrailingIcon: boolean = false;

	export let showClickableOptions: boolean = false;
</script>

<IconTypeOption
	bind:value={leadingIcon}
	label="Leading icon"
	allowEmpty
	disabled={leadingIconDisabled}
	on:change
/>
<IconTypeOption
	bind:value={trailingIcon}
	label="Trailing icon"
	allowEmpty
	on:change
/>
{#if showClickableOptions}
	<Checkbox
		bind:checked={clickableLeadingIcon}
		label="Clickable leading icon"
		disabled={!leadingIcon}
		on:change
	/>
	<Checkbox
		bind:checked={clickableTrailingIcon}
		label="Clickable trailing icon"
		disabled={!trailingIcon}
		on:change
	/>
{/if}
