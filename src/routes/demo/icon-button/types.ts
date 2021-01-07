import type { IconType } from "src/components/configurator/smui-components/icons";
import { IconButtonColor } from "@smui/core/icon-button";

export interface IconButtonConfigurations {
	disabled: boolean;
	ripple: boolean;
	color: IconButtonColor;
	link: boolean;
	iconType: IconType;
}
