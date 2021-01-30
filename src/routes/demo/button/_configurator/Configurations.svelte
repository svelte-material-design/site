<svelte:options immutable={true} />

<script lang="ts">
	import { IconTypeOption } from "src/components/configurator/smui-components/icons";
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";
	import type { ButtonConfigurations } from "./types";

	export let configurations: ButtonConfigurations;

	function handleIconOnlyChange() {
		if (configurations.iconOnly) {
			configurations.trailingIcon = null;
		}
	}

	function handleChange() {
		configurations = { ...configurations };
	}
</script>

<Section>
	<Select
		bind:value={configurations.variant}
		label="Variant"
		options={[
			{ value: "text", label: "Text" },
			{ value: "raised", label: "Raised" },
			{ value: "unelevated", label: "Unelevated" },
			{ value: "outlined", label: "Outlined" },
		]}
		nullable={false}
		on:change={handleChange}
	/>
	<Select
		bind:value={configurations.color}
		label="Color"
		options={[
			{ value: "primary", label: "Primary" },
			{ value: "secondary", label: "Secondary" },
		]}
		nullable={false}
		on:change={handleChange}
	/>
	<IconTypeOption
		bind:value={configurations.leadingIcon}
		allowEmpty={!configurations.iconOnly}
		label="Leading icon"
		on:change={handleChange}
	/>
	<IconTypeOption
		bind:value={configurations.trailingIcon}
		allowEmpty
		label="Trailing icon"
		disabled={configurations.iconOnly}
		on:change={handleChange}
	/>
	<Select
		bind:value={configurations.customStyle}
		label="Custom style"
		options={[
			{ value: "", label: "" },
			{ value: "mdc-mixins", label: "MDC Mixins" },
			{ value: "custom-css", label: "Custom CSS" },
		]}
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.disabled}
		label="Disabled"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.ripple}
		label="Ripple"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.link}
		label="Link"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.iconOnly}
		label="Icon only"
		on:change={handleIconOnlyChange}
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.accessibleTouch}
		label="Accessible touch"
	/>
</Section>
