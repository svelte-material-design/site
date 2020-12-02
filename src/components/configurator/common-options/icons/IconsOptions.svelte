<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import IconTypeOption, { IconType } from "./IconTypeOption.svelte";
	import { Checkbox } from "@smui/core/checkbox";

	export let leadingIcon: IconType = undefined;
	export let leadingIconDisabled: boolean = false;
	export let trailingIcon: IconType = undefined;
	export let clickableLeadingIcon: boolean = false;
	export let clickableTrailingIcon: boolean = false;
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
<div>
	<FormField>
		<Checkbox
			bind:checked={clickableLeadingIcon}
			disabled={!leadingIcon}
			on:change />
		<Label>Clickable leading icon</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox
			bind:checked={clickableTrailingIcon}
			disabled={!trailingIcon}
			on:change />
		<Label>Clickable trailing icon</Label>
	</FormField>
</div>
