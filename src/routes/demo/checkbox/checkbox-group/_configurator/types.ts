import type { CheckboxConfigurations } from "../../_configurator/types";
import type {
	Item,
	Group,
} from "src/components/configurator/common-options/multiple-items";

export interface CheckboxConfigurationsItem
	extends CheckboxConfigurations,
		Item {}
export interface CheckboxGroupConfigurations
	extends Group<CheckboxConfigurationsItem> {
	value: string[];
}
