<svelte:options immutable={true} />

<script lang="ts">
	import type { FabVariant, FabColor } from "@smui/core/fab";
	import { IconTypeOption } from "src/components/configurator/smui-components/icons";
	import type { IconType } from "src/components/configurator/smui-components/icons";
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";

	export let show: boolean = true;
	export let color: FabColor = "secondary";
	export let variant: FabVariant = "regular";
	export let ripple: boolean = true;
	export let iconType: IconType = "material-icon";
	export let accessibleTouch: boolean = false;
</script>

<Section>
	<Select
		bind:value={variant}
		label="Variant"
		options={[
			{ value: "regular", label: "Regular" },
			{ value: "extended", label: "Extended" },
			{ value: "mini", label: "Mini" },
		]}
		nullable={false}
	/>
	<Select
		bind:value={color}
		label="Color"
		options={[
			{ value: "secondary", label: "Secondary" },
			{ value: "primary", label: "Primary" },
		]}
		nullable={false}
	/>
	<IconTypeOption bind:value={iconType} label="Icon" />
	<Checkbox bind:checked={show} label="Show" />
	<Checkbox bind:checked={ripple} label="Ripple" />
	<Checkbox bind:checked={accessibleTouch} label="Accessible touch" />
</Section>
