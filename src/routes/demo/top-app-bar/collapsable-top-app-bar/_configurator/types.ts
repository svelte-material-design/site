import type { TopAppBarColor } from "@smui/core/top-app-bar";

export interface CollapsableTopAppBarConfigurations {
	color: TopAppBarColor;
	prominent: boolean;
	dense: boolean;
	alwaysCollapsed: boolean;
	collapsed?: boolean;
}
