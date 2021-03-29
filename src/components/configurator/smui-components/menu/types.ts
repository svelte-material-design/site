import type {
	ListItemConfigurations as BaseListItemConfigurations,
	ListConfigurations as BaseListConfigurations,
} from "src/components/configurator/smui-components/list/types";
import type {
	Item,
	Group,
} from "src/components/configurator/common-options/multiple-items";
import type { MenuSurfaceConfigurations } from "src/components/configurator/smui-components/menu-surface/types";
import type {
	MenuSelectionType,
	MenuValue,
} from "@svelte-material-design/core/menu";

export { BaseListConfigurations, BaseListItemConfigurations };

export interface MenuConfigurations
	extends BaseListConfigurations,
		MenuSurfaceConfigurations,
		Group<MenuItemConfigurations> {
	items: MenuItemConfigurations[];
	nullable: boolean;
	selectionType: MenuSelectionType;
	value: MenuValue;
	showSelectionGroup: boolean;
}

export interface MenuItemConfigurations
	extends BaseListItemConfigurations,
		Item {}
