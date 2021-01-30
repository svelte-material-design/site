import type { IconType } from "src/components/configurator/smui-components/icons";
import type { FabVariant, FabColor } from "@smui/core/fab";

export interface FabConfigurations {
	show: boolean;
	color: FabColor;
	variant: FabVariant;
	ripple: boolean;
	iconType: IconType;
	accessibleTouch: boolean;
}
