import type {
	Item,
	Group,
} from "src/components/configurator/common-options/multiple-items";
import type { TabIndicatorTransition } from "@svelte-material-design/core/tab-bar";
import type { IconType } from "src/components/configurator/smui-components/icons";

export type TabIndicatorPosition = "label" | "tab";

export interface TabBarConfigurations extends Group<TabConfigurations> {
	value: string;
	focusOnActivate: boolean;
	activateOnKeyboardNavigation: boolean;
	transition: TabIndicatorTransition;
	nullable: boolean;
}

export interface TabConfigurations extends Item {
	selected: boolean;
	tabIndicatorPosition: TabIndicatorPosition;
	trailingIcon: IconType;
	leadingIcon: IconType;
	ripple: boolean;
	stacked: boolean;
	useMinWidth: boolean;
	label: string;
}
