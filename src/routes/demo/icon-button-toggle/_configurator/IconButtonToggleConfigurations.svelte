<script lang="ts">
	import { IconButtonColor } from "@smui/core/icon-button";
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
	export let color: IconButtonColor = undefined;
	export let iconType: IconType = "material-icon";
</script>

<Select
	bind:value={color}
	label="Color"
	options={[{ value: '', label: '' }, { value: 'primary', label: 'Primary' }, { value: 'secondary', label: 'Secondary' }]} />
<IconTypeOption bind:value={iconType} label="Icon type" />
<Checkbox bind:checked={disabled} label="Disabled" />
<Checkbox bind:checked={ripple} label="Ripple" />
