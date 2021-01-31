<svelte:options immutable={true} />

<script lang="ts">
	import { IconsOptions } from "src/components/configurator/smui-components/icons";
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { onMount, tick } from "svelte";
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import type { ListItemConfigurations } from "../types";
	import type { ListType } from "@svelte-material-ui-test/core/packages/list";

	export let configurations: ListItemConfigurations;
	export let listType: ListType;
	export let labelFn: () => string = undefined;

	let useLabel: boolean = true;
	$: {
		configurations.label = useLabel
			? labelFn
				? labelFn()
				: "Label"
			: undefined;

		configurations.labelRow2 = "Secondary text";
		configurations.labelRow3 = "Third line";

		handleChange();
	}

	async function handleListTypeUpdate() {
		await tick();
		if (listType !== "icon" && listType !== "textual") {
			configurations.leadingIcon = null;
		} else if (listType === "icon" && !configurations.leadingIcon) {
			configurations.leadingIcon = "material-icon";
		}
	}

	function handleChange() {
		configurations = { ...configurations };
	}
</script>

<UseState value={listType} onUpdate={handleListTypeUpdate} />

<Checkbox
	bind:checked={configurations.ripple}
	label="Ripple"
	on:change={handleChange}
	on:change
/>
<Checkbox
	bind:checked={useLabel}
	label="Label"
	on:change={handleChange}
	on:change
/>
<Checkbox
	bind:checked={configurations.disabled}
	label="Disabled"
	on:change={handleChange}
	on:change
/>
<IconsOptions
	showClickableOptions
	bind:leadingIcon={configurations.leadingIcon}
	leadingIconDisabled={listType !== "icon" && listType !== "textual"}
	bind:trailingIcon={configurations.trailingIcon}
	bind:clickableLeadingIcon={configurations.clickableLeadingIcon}
	bind:clickableTrailingIcon={configurations.clickableTrailingIcon}
	on:change={handleChange}
	on:change
/>
