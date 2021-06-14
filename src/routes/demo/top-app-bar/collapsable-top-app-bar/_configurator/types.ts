import type { TopAppBarColor } from "@svelte-material-design/core/top-app-bar";

export interface CollapsableTopAppBarConfigurations {
	color: TopAppBarColor;
	prominent: boolean;
	dense: boolean;
	alwaysCollapsed: boolean;
	collapsed?: boolean;
}
