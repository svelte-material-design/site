import type { RadioConfigurations } from "../../_configurator/types";
import type {
	Item,
	Group,
} from "src/components/configurator/common-options/multiple-items";

export interface RadioConfigurationsItem extends RadioConfigurations, Item {}
export interface RadioGroupConfigurations
	extends Group<RadioConfigurationsItem> {
	value: string;
}
