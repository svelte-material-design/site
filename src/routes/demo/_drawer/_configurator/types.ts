import type { DrawerVariant } from "@svelte-material-design/core/drawer";
import type {
	BaseListItemConfigurations,
	ListConfigurations,
} from "src/components/configurator/smui-components/list/types";
import type { Group } from "src/components/configurator/common-options/multiple-items";

export interface DrawerConfigurations
	extends Group<NavItemConfigurations>,
		Pick<
			ListConfigurations,
			| "wrapFocus"
			| "dense"
			| "itemsStyle"
			| "itemsRows"
			| "separator"
			| "separatorInsetPadding"
			| "separatorInsetLeading"
			| "separatorInsetTrailing"
		> {
	layout: "full-height" | "below-top-app-bar";
	variant: DrawerVariant;
	open: boolean;
	title: string;
	subtitle: string;
}

export interface NavItemConfigurations extends BaseListItemConfigurations {}
