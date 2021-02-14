<svelte:options immutable={true} />

<script lang="ts">
	import { IconTypeOption } from "src/components/configurator/smui-components/icons";
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();

	function handleIconOnlyChange() {
		if ($configurations$.iconOnly) {
			$configurations$.trailingIcon = null;
		}
	}

	function updateInstance() {
		$configurations$ = { ...$configurations$ };
	}
</script>

<Section>
	<Select
		bind:value={$configurations$.variant}
		label="Variant"
		options={[
			{ value: "text", label: "Text" },
			{ value: "raised", label: "Raised" },
			{ value: "unelevated", label: "Unelevated" },
			{ value: "outlined", label: "Outlined" },
		]}
		nullable={false}
		on:change={updateInstance}
	/>
	<Select
		bind:value={$configurations$.color}
		label="Color"
		options={[
			{ value: "primary", label: "Primary" },
			{ value: "secondary", label: "Secondary" },
		]}
		nullable={false}
		on:change={updateInstance}
	/>
	<IconTypeOption
		bind:value={$configurations$.leadingIcon}
		allowEmpty={!$configurations$.iconOnly}
		label="Leading icon"
		on:change={updateInstance}
	/>
	<IconTypeOption
		bind:value={$configurations$.trailingIcon}
		allowEmpty
		label="Trailing icon"
		disabled={$configurations$.iconOnly}
		on:change={updateInstance}
	/>
	<Select
		bind:value={$configurations$.customStyle}
		label="Custom style"
		options={[
			{ value: "", label: "" },
			{ value: "mdc-mixins", label: "MDC Mixins" },
			{ value: "custom-css", label: "Custom CSS" },
		]}
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={$configurations$.disabled}
		label="Disabled"
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={$configurations$.ripple}
		label="Ripple"
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={$configurations$.link}
		label="Link"
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={$configurations$.iconOnly}
		label="Icon only"
		on:change={handleIconOnlyChange}
		on:change={updateInstance}
	/>
	<Checkbox
		bind:checked={$configurations$.accessibleTouch}
		label="Accessible touch"
	/>
</Section>
