import { CheckboxConfigurations as CheckboxConfigurationsProps } from "../../_configurator";
import { Item } from "src/components/configurator/common-options/multiple-items";

export interface CheckboxConfigurationsItem
	extends CheckboxConfigurationsProps,
		Item {}
