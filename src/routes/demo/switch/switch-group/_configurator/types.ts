import type { SwitchConfigurations } from "../../_configurator/types";
import type {
	Item,
	Group,
} from "src/components/configurator/common-options/multiple-items";
import type { SelectionType } from "@svelte-material-ui-test/core/node_modules/@raythurnevoid/svelte-group-components/ts/selectable";

export interface SwitchConfigurationsItem extends SwitchConfigurations, Item {}
export interface SwitchGroupConfigurations
	extends Group<SwitchConfigurationsItem> {
	selectionType: SelectionType;
	nullable: boolean;
	value: string[];
}
