import type { InputFieldVariant } from "@svelte-material-design/core/textfield";
import type { IconType } from "src/components/configurator/smui-components/icons";
import type { Group } from "src/components/configurator/common-options/multiple-items";
import type {
	BaseListItemConfigurations,
	ListConfigurations,
} from "src/components/configurator/smui-components/list/types";

export interface BaseInputFieldConfigurations {
	ripple: boolean;
	disabled: boolean;
	readonly: boolean;
	title: string;
	helperText: string;
	helperTextAsValidationMsg: boolean;
	persistentHelperText: boolean;
	label: string;
	value: any;
	invalid: boolean;
}

export interface InputFieldConfigurations extends BaseInputFieldConfigurations {
	type: string;
	prefix: string;
	useDatalist: boolean;
	size: number;
	pattern: string;
	minlength: number;
	step: number;
	min: number;
	max: number;
	suffix: string;
	trailingIcon: IconType;
	placeholder: string;
	maxlength: number;
	characterCounter: boolean;
	lineRipple: boolean;
	variant: InputFieldVariant;
	leadingIcon: IconType;
	clearOnTrailingIconClick: boolean;
}

export interface TextAreaFieldConfigurations
	extends BaseInputFieldConfigurations,
		Pick<
			InputFieldConfigurations,
			"maxlength" | "characterCounter" | "placeholder"
		> {
	rows: number;
	cols: number;
	wrap: string;
	resizable: boolean;
	useInternalCounter: boolean;
}

export interface SelectConfigurations
	extends BaseInputFieldConfigurations,
		Pick<
			InputFieldConfigurations,
			"maxlength" | "lineRipple" | "variant" | "leadingIcon"
		>,
		Pick<
			ListConfigurations,
			| "nullable"
			| "wrapFocus"
			| "dense"
			| "itemsStyle"
			| "itemsRows"
			| "separator"
			| "separatorInsetPadding"
			| "separatorInsetLeading"
			| "separatorInsetTrailing"
		>,
		Group<OptionConfigurations> {
	value: string;
	showEmptyOption: boolean;
}

export interface OptionConfigurations extends BaseListItemConfigurations {}
