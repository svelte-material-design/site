import type {
	Item,
	Group,
} from "src/components/configurator/common-options/multiple-items";
import type {
	ChipSetVariant,
	ChipSetValue,
} from "@svelte-material-design/core/chips";
import type { IconType } from "src/components/configurator/smui-components/icons";

export type TabIndicatorPosition = "label" | "tab";

export interface ChipSetConfigurations extends Group<ChipConfigurations> {
	variant: ChipSetVariant;
	entryAnimation: boolean;
	value: ChipSetValue;
	nullable: boolean;
}

export interface ChipConfigurations extends Item {
	value: string;
	selected: boolean;
	ripple: boolean;
	useCheckmark: boolean;
	hideLeadingIconOnSelect: boolean;
	leadingIcon: IconType;
	trailingIcon: IconType;
	accessibleTouch: boolean;
	trailingIconAction: boolean;
	action: boolean;
}
