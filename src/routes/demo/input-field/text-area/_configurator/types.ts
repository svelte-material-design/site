import type { BaseInputFieldConfigurations } from "src/components/configurator/smui-components/input/types";

export interface TextAreaFieldConfigurations
	extends BaseInputFieldConfigurations {
	rows: number;
	cols: number;
	wrap: string;
	resizable: boolean;
	useInternalCounter: boolean;
}
