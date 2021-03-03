import type { InputFieldVariant } from "@svelte-material-design/core/textfield";
import { IconType } from "src/components/configurator/smui-components/icons";

export interface InputFieldConfigurations {
	ripple: boolean;
	lineRipple: boolean;
	variant: InputFieldVariant;
	type: string;
	disabled: boolean;
	prefix: string;
	useDatalist: boolean;
	readonly: boolean;
	formnovalidate: boolean;
	required: boolean;
	title: string;
	placeholder: string;
	size: number;
	autocomplete: string;
	pattern: string;
	maxlength: number;
	minlength: number;
	step: number;
	min: number;
	max: number;
	suffix: string;
	leadingIcon: IconType;
	trailingIcon: IconType;
	clearOnTrailingIconClick: boolean;
	characterCounter: boolean;
	helperText: string;
	helperTextAsValidationMsg: boolean;
	persistentHelperText: boolean;
	label: string;
}
