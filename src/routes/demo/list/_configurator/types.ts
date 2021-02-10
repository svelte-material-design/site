import type {
	ListItemConfigurations as BaseListItemConfigurations,
	ListConfigurations as BaseListConfigurations,
} from "src/components/configurator/smui-components/list";
import type {
	Item,
	Group,
} from "src/components/configurator/common-options/multiple-items";

export { BaseListConfigurations, BaseListItemConfigurations };

export interface ListConfigurations
	extends BaseListConfigurations,
		Group<ListItemConfigurations> {
	value: string | string[];
	items: ListItemConfigurations[];
}

export interface ListItemConfigurations
	extends BaseListItemConfigurations,
		Item {}
