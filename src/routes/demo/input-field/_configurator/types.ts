import type { InputFieldVariant } from "@svelte-material-design/core/textfield";
import { BaseInputFieldConfigurations } from "src/components/configurator/smui-components/input/types";
import { IconType } from "src/components/configurator/smui-components/icons";

export interface InputFieldConfigurations extends BaseInputFieldConfigurations {
	lineRipple: boolean;
	variant: InputFieldVariant;
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
	leadingIcon: IconType;
	trailingIcon: IconType;
	clearOnTrailingIconClick: boolean;
}
