import type { ItemCodeProps } from "src/components/configurator/smui-components/list";
import type { Item } from "src/components/configurator/common-options/multiple-items";
import type { ListRole, ListOrientation, ListType } from "@smui/core/list";

export interface ListConfigurations extends CommonListConfigurations {
	role: ListRole;
}

export interface CommonListConfigurations {
	value: string | string[];
	wrapFocus: boolean;
	dense: boolean;
	density: number;
	orientation: ListOrientation;
	type: ListType;
	itemsRows: number;
	separator: boolean;
	separatorInsetPadding: boolean;
	separatorInsetLeading: boolean;
	separatorInsetTrailing: boolean;
	items: ListItemConfigurations[];
}

export interface ListItemConfigurations extends ItemCodeProps, Item {}
