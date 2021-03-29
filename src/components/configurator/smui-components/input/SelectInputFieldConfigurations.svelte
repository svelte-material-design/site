<svelte:options immutable={true} />

<script lang="ts">
	import { Section } from "src/components/configurator/molecules/configurations";
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import { IconTypeOption } from "src/components/configurator/smui-components/icons";
	import { BaseInputFieldConfigurations } from "src/components/configurator/smui-components/input";
	import type { SelectConfigurations } from "src/components/configurator/smui-components/input/types";

	export let configurations: SelectConfigurations;

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<Section>
	<Select
		bind:value={configurations.variant}
		label="Variant"
		nullable={false}
		options={[
			{ label: "Filled", value: "filled" },
			{ label: "Outlined", value: "outlined" },
		]}
		on:change={updateInstance}
	/>
</Section>
<BaseInputFieldConfigurations bind:configurations />
<slot name="helperText" />
<Section>
	<Checkbox
		label="Line Ripple"
		bind:checked={configurations.lineRipple}
		on:change={updateInstance}
	/>
	<slot name="additional" />
</Section>
<Section>
	<IconTypeOption
		allowEmpty={true}
		bind:value={configurations.leadingIcon}
		label="Leading icon"
		on:change={updateInstance}
	/>
	<slot name="icons" />
</Section>
