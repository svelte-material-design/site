<svelte:options immutable={true} />

<script lang="ts">
	import { IconsOptions } from "src/components/configurator/smui-components/icons";
	import type { IconType } from "src/components/configurator/smui-components/icons";
	import { ListType } from "@smui/core/list";
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { tick } from "svelte";
	import { Checkbox } from "src/components/configurator/atoms/configurations";

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
		await tick();
		if (listType !== "icon" && listType !== "textual") {
			leadingIcon = null;
		} else if (listType === "icon" && !leadingIcon) {
			leadingIcon = "material-icon";
		}
	}
</script>

<UseState value={listType} onUpdate={handleListTypeUpdate} />

<Checkbox bind:checked={ripple} label="Ripple" on:change />
<Checkbox bind:checked={useLabel} label="Label" on:change />
<Checkbox bind:checked={disabled} label="Disabled" on:change />
<Checkbox bind:checked={useAriaLabel} label="Use aria label" on:change />
<Checkbox bind:checked={useTitle} label="Use title" on:change />
<IconsOptions
	showClickableOptions
	bind:leadingIcon
	leadingIconDisabled={listType !== "icon" && listType !== "textual"}
	bind:trailingIcon
	bind:clickableLeadingIcon
	bind:clickableTrailingIcon
	on:change
/>
