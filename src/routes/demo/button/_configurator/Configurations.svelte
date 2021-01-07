<script lang="ts">
	import type { ButtonVariant, ButtonColor } from "@smui/core/button";
	import {
		IconTypeOption,
		IconType,
	} from "src/components/configurator/smui-components/icons";
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/common-options/base";

	export let disabled: boolean = false;
	export let ripple: boolean = true;
	export let variant: ButtonVariant = "text";
	export let link: boolean = false;
	export let color: ButtonColor = "primary";
	export let iconOnly: boolean = false;
	export let leadingIcon: IconType = undefined;
	export let trailingIcon: IconType = undefined;
	export let customStyle: "mdc-mixins" | "custom-css" | "" = "";
	export let accessibleTouch: boolean = false;

	function handleIconOnlyChange() {
		if (iconOnly) {
			trailingIcon = null;
		}
	}
</script>

<svelte:options immutable={true} />

<Select
	bind:value={variant}
	label="Variant"
	options={[{ value: 'text', label: 'Text' }, { value: 'raised', label: 'Raised' }, { value: 'unelevated', label: 'Unelevated' }, { value: 'outlined', label: 'Outlined' }]}
	nullable={false} />
<Select
	bind:value={color}
	label="Color"
	options={[{ value: 'primary', label: 'Primary' }, { value: 'secondary', label: 'Secondary' }]}
	nullable={false} />
<IconTypeOption
	bind:value={leadingIcon}
	allowEmpty={!iconOnly}
	label="Leading icon" />
<IconTypeOption
	bind:value={trailingIcon}
	allowEmpty
	label="Trailing icon"
	disabled={iconOnly} />
<Select
	bind:value={customStyle}
	label="Custom style"
	options={[{ value: '', label: '' }, { value: 'mdc-mixins', label: 'MDC Mixins' }, { value: 'custom-css', label: 'Custom CSS' }]} />
<Checkbox bind:checked={disabled} label="Disabled" />
<Checkbox bind:checked={ripple} label="Ripple" />
<Checkbox bind:checked={link} label="Link" />
<Checkbox
	bind:checked={iconOnly}
	label="Icon only"
	on:change={handleIconOnlyChange} />
<Checkbox bind:checked={accessibleTouch} label="Accessible touch" />
