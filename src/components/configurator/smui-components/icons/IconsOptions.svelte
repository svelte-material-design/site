<svelte:options immutable={true} />

<script lang="ts">
	import type { IconType } from ".";
	import { IconTypeOption } from ".";

	export let leadingIcon: IconType = undefined;
	export let leadingIconDisabled: boolean = false;
	export let trailingIcon: IconType = undefined;
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
