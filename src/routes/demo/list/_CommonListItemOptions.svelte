<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { Checkbox } from "@smui/core/checkbox";
	import { IconType } from "src/components/configurator/common-options/icons/IconTypeOption.svelte";
	import { ListType } from "@smui/core/list";
	import IconsOptions from "src/components/configurator/common-options/icons/IconsOptions.svelte";
	import { UseState } from "@smui/core/common/hooks";

	export let ripple: boolean = true;
	export let disabled: boolean;
	export let listType: ListType;

	export let leadingIcon: IconType;
	export let trailingIcon: IconType;
	export let clickableLeadingIcon: boolean;
	export let clickableTrailingIcon: boolean;

	export let useLabel: boolean = true;
	export let useAriaLabel: boolean;
	export let useTitle: boolean;
	export let labelFn: () => string = undefined;
	export let ariaLabelFn: () => string = undefined;
	export let titleFn: () => string = undefined;

	export let ariaLabel: string;
	$: ariaLabel = useAriaLabel
		? ariaLabelFn
			? ariaLabelFn()
			: "Label"
		: undefined;

	export let label: string;
	$: label = useLabel ? (labelFn ? labelFn() : "Label") : undefined;

	export let title: string;
	$: title = useTitle ? (titleFn ? titleFn() : "Title") : undefined;

	async function handleListTypeUpdate() {
		if (listType !== "icon") {
			leadingIcon = null;
		} else {
			leadingIcon = "material-icon";
		}
	}
</script>

<svelte:options immutable={true} />

<UseState value={listType} onUpdate={handleListTypeUpdate} />

<div>
	<FormField>
		<Checkbox bind:checked={ripple} on:change />
		<Label>Ripple</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={useLabel} on:change />
		<Label>Label</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={disabled} on:change />
		<Label>Disabled</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={useAriaLabel} on:change />
		<Label>Use aria label</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={useTitle} on:change />
		<Label>Use title</Label>
	</FormField>
</div>
<IconsOptions
	bind:leadingIcon
	leadingIconDisabled={listType !== 'icon'}
	bind:trailingIcon
	bind:clickableLeadingIcon
	bind:clickableTrailingIcon
	on:change />
