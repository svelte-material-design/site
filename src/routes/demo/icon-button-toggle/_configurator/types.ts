import type { IconType } from "src/components/configurator/smui-components/icons";
import type { IconButtonColor } from "@svelte-material-design/core/icon-button-toggle";

export interface IconButtonToggleConfigurations {
	disabled: boolean;
	ripple: boolean;
	color: IconButtonColor;
	iconType: IconType;
}
