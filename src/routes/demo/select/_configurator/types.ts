import type { SelectInputFieldConfigurations } from "src/components/configurator/smui-components/input/types";
import type {
	CommonListConfigurations,
	BaseListItemConfigurations,
} from "src/components/configurator/smui-components/list/types";

export interface SelectConfigurations
	extends CommonListConfigurations<OptionConfigurations>,
		SelectInputFieldConfigurations {
	nullable: boolean;
	showEmptyOption: boolean;
}

export interface OptionConfigurations extends BaseListItemConfigurations {}
