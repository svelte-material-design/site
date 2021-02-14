import type {
	ListRole,
	ListOrientation,
	ListItemsStyle,
} from "@smui/core/list";
import type { IconType } from "../icons";

export interface CommonListConfigurations {
	wrapFocus: boolean;
	dense: boolean;
	density: number;
	orientation: ListOrientation;
	itemsStyle: ListItemsStyle;
	itemsRows: number;
	separator: boolean;
	separatorInsetPadding: boolean;
	separatorInsetLeading: boolean;
	separatorInsetTrailing: boolean;
	items: ListItemConfigurations[];
}

export interface ListConfigurations extends CommonListConfigurations {
	role?: ListRole;
}

export interface ListBoxConfigurations extends CommonListConfigurations {
	multiSelection: boolean;
}

export interface ListItemConfigurations {
	value?: string;
	ripple?: boolean;
	disabled?: boolean;
	selected?: boolean;
	href?: string;
	label: string;
	labelRow2?: string;
	labelRow3?: string;
	ariaLabel?: string;
	activated?: boolean;
	leadingIcon?: IconType;
	trailingIcon?: IconType;
	leadingIconTag?: string;
}
