import type { IconType } from "src/components/configurator/smui-components/icons";
import type { IconButtonColor } from "@svelte-material-design/core/icon-button";

export interface IconButtonConfigurations {
	disabled: boolean;
	ripple: boolean;
	color: IconButtonColor;
	link: boolean;
	iconType: IconType;
}
