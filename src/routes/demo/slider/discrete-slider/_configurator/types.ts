import type { SliderConfigurations } from "../../_configurator/types";
import type { RangeConfigurations } from "../../_configurator/types";

export interface DiscreteSliderConfigurations extends SliderConfigurations {
	step: number;
	tickMarks: boolean;
	rangeStart: DiscreteSliderRangeConfigurations;
	rangeEnd?: DiscreteSliderRangeConfigurations;
}

export interface DiscreteSliderRangeConfigurations extends RangeConfigurations {
	valueIndicator: boolean;
}
