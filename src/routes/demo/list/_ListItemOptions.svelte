<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { Checkbox } from "@smui/core/checkbox";
	import IconTypeOption, {
		IconType,
	} from "src/components/configurator/common-options/IconTypeOption.svelte";
	import { ListRole } from "@smui/core/list";

	export let listRole: ListRole;
	export let selected: boolean;
	$: if (listRole === undefined) {
		selected = false;
	}

	export let ripple: boolean = true;
	export let disabled: boolean;
	export let leadingIcon: IconType;

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
</script>

<svelte:options immutable={true} />

<IconTypeOption
	bind:value={leadingIcon}
	label="Leading icon"
	allowEmpty
	on:change />
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
		<Checkbox
			bind:checked={selected}
			on:change
			disabled={listRole === undefined} />
		<Label>Selected</Label>
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
