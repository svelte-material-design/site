import type { InputFieldVariant } from "@svelte-material-design/core/textfield";
import { IconType } from "src/components/configurator/smui-components/icons";

export interface BaseInputFieldConfigurations {
	ripple: boolean;
	disabled: boolean;
	readonly: boolean;
	title: string;
	placeholder: string;
	size: number;
	maxlength: number;
	characterCounter: boolean;
	helperText: string;
	helperTextAsValidationMsg: boolean;
	persistentHelperText: boolean;
	label: string;
	value: any;
	invalid: boolean;
}
