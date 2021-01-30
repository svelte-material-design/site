import type { IconType } from "src/components/configurator/smui-components/icons";

export interface SnackbarConfigurations {
	open: boolean;
	timeoutMs: number;
	stacked: boolean;
	leading: boolean;
	closeOnEscape: boolean;
	showActionBtn: boolean;
	actionRipple: boolean;
	iconActionType: IconType;
	iconActionRipple: boolean;
	showDismiss: boolean;
	dismissRipple: boolean;
}
