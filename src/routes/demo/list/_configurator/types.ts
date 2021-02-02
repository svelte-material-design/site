import type {
	ListItemConfigurations as BaseListItemConfigurations,
	ListConfigurations as BaseListConfigurations,
} from "src/components/configurator/smui-components/list";
import type { Item } from "src/components/configurator/common-options/multiple-items";

export interface ListConfigurations extends BaseListConfigurations {
	value: string | string[];
	items: ListItemConfigurations[];
}

export interface ListItemConfigurations
	extends BaseListItemConfigurations,
		Item {}
