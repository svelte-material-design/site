import { IconType } from "src/components/configurator/smui-components/icons";

export interface TabBarConfigurations {
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

export interface TabConfigurations {
	active: boolean;
	key: string;
	ripple: boolean;
	stacked: boolean;
	useMinWidth: boolean;
	tabIndicatorPosition: TabIndicatorPosition;
	trailingIcon: IconType;
	leadingIcon: IconType;
	label: string;
}

export type TabIndicatorPosition = "label" | "tab";
