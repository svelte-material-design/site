import type { BaseInputFieldConfigurations } from "src/components/configurator/smui-components/input/types";

export interface InputFieldConfigurations extends BaseInputFieldConfigurations {
	rows: number;
	cols: number;
	wrap: string;
	resizable: boolean;
}
