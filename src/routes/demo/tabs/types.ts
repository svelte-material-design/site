import { IconType } from "src/components/configurator/smui-components/icons";
import { TabIndicatorTransition } from "@smui/core/tab-bar";

export interface TabBarConfigurations {
	focusOnActivate: boolean;
	activateOnKeyboardNavigation: boolean;
	transition: TabIndicatorTransition;
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
