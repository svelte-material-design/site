export interface SliderConfigurations {
	disabled: boolean;
	label: string;
	rangeStart: RangeConfigurations;
	rangeEnd?: RangeConfigurations;
}

export interface RangeConfigurations {
	min: number;
	max: number;
}
