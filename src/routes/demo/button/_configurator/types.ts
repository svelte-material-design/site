import type { IconType } from "src/components/configurator/smui-components/icons";
import type {
	ButtonVariant,
	ButtonColor,
} from "@svelte-material-design/core/button";

export interface ButtonConfigurations {
	disabled: boolean;
	ripple: boolean;
	variant: ButtonVariant;
	link: boolean;
	color: ButtonColor;
	iconOnly: boolean;
	leadingIcon: IconType;
	trailingIcon: IconType;
	customStyle: CustomStyle;
	accessibleTouch: boolean;
}

export type CustomStyle = "mdc-mixins" | "custom-css" | "";
