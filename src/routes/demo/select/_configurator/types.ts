import type { SelectVariant } from "@svelte-material-design/core/select";
import { IconType } from "src/components/configurator/smui-components/icons";
import type {
	Item,
	Group,
} from "src/components/configurator/common-options/multiple-items";

export interface SelectConfigurations extends Group<OptionConfigurations> {
	ripple: boolean;
	lineRipple: boolean;
	variant: SelectVariant;
	leadingIcon: IconType;
	value: string;
	nullable: boolean;
	disabled: boolean;
	readonly: boolean;
	invalid: boolean;
	required: boolean;
	label: string;
}

export interface OptionConfigurations extends Item {
	value: string;
	disabled: boolean;
}
