import type {
	ListSelectionType,
	ListOrientation,
	ListItemsStyle,
} from "@svelte-material-design/core/list";
import type { IconType } from "../icons";
import type {
	Item,
	Group,
} from "src/components/configurator/common-options/multiple-items";

export interface CommonListConfigurations<
	Item extends BaseListItemConfigurations = BaseListItemConfigurations
> extends Group<Item> {
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
	typeahead: boolean;
}

export interface ListConfigurations
	extends CommonListConfigurations<ListItemConfigurations> {
	selectionType?: ListSelectionType;
	role?: ListRole;
	nullable?: boolean;
}

export interface BaseListItemConfigurations extends Item {
	value?: string;
	ripple?: boolean;
	disabled?: boolean;
	selected?: boolean;
	href?: string;
	labelRow2?: string;
	labelRow3?: string;
	ariaLabel?: string;
	activated?: boolean;
	leadingIcon?: IconType;
	trailingIcon?: IconType;
}

export interface ListItemConfigurations extends BaseListItemConfigurations {
	href?: string;
	activated?: boolean;
	showCloseBtn?: boolean;
}

export type ListRole = "listbox" | "radiogroup" | "group";
export type ListItemRole = "option" | "radio" | "checkbox";
