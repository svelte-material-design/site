export interface SliderConfigurations {
	disabled: boolean;
	label: string;
	rangeStart: RangeConfigurations;
	rangeEnd?: RangeConfigurations;
	valueStart: number;
	valueEnd?: number;
}

export interface RangeConfigurations {
	min: number;
	max: number;
}
