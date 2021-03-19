<svelte:options immutable={true} />

<script lang="ts">
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import { IconTypeOption } from "src/components/configurator/smui-components/icons";

	const { configurations$ } = getConfiguratorContext();

	function updateInstance() {
		$configurations$ = { ...$configurations$ };
	}
</script>

<Section>
	<Select
		bind:value={$configurations$.variant}
		label="Variant"
		nullable={false}
		options={[
			{ label: "Filled", value: "filled" },
			{ label: "Outlined", value: "outlined" },
		]}
		on:change={updateInstance}
	/>
</Section>
<Section>
	<Checkbox
		label="Ripple"
		bind:checked={$configurations$.ripple}
		on:change={updateInstance}
	/>
	<Checkbox
		label="Line Ripple"
		bind:checked={$configurations$.lineRipple}
		on:change={updateInstance}
	/>
</Section>
<Section>
	<IconTypeOption
		allowEmpty={true}
		bind:value={$configurations$.leadingIcon}
		label="Leading icon"
		on:change={updateInstance}
	/>
</Section>
<Section>
	<Checkbox
		label="Disabled"
		bind:checked={$configurations$.disabled}
		on:change={updateInstance}
	/>
	<Checkbox
		label="Readonly"
		bind:checked={$configurations$.readonly}
		on:change={updateInstance}
	/>
	<Checkbox
		label="Invalid"
		bind:checked={$configurations$.invalid}
		on:change={updateInstance}
	/>
</Section>
