<svelte:options immutable={true} />

<script lang="ts">
	import type { IconButtonColor } from "@svelte-material-design/core/icon-button";
	import type {
		IconType,
	} from "src/components/configurator/smui-components/icons";
	import {
		IconTypeOption,
	} from "src/components/configurator/smui-components/icons";
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";

	export let disabled: boolean = false;
	export let ripple: boolean = true;
	export let color: IconButtonColor = "inherit";
	export let iconType: IconType = "material-icon";
</script>

<Section>
	<Select
		bind:value={color}
		label="Color"
		options={[
			{ value: "inherit", label: "Inherit" },
			{ value: "primary", label: "Primary" },
			{ value: "secondary", label: "Secondary" },
		]}
		nullable={false}
	/>
	<IconTypeOption bind:value={iconType} label="Icon type" />
	<Checkbox bind:checked={disabled} label="Disabled" />
	<Checkbox bind:checked={ripple} label="Ripple" />
</Section>
