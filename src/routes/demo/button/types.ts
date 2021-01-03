import type { IconType } from "src/components/configurator/smui-components/icons";
import type { ButtonVariant } from "@smui/core/button";

export interface ButtonConfigurations {
	disabled: boolean;
	ripple: boolean;
	variant: ButtonVariant;
	link: boolean;
	secondary: boolean;
	iconOnly: boolean;
	leadingIcon: IconType;
	trailingIcon: IconType;
	customStyle: CustomStyle;
}

export type CustomStyle = "mdc-mixins" | "custom-css" | "";
