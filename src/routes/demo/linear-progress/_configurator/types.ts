import type { IndeterminateLinearProgressConfigurations } from "../indeterminate-linear-progress/_configurator/types";

export interface LinearProgressConfigurations
	extends IndeterminateLinearProgressConfigurations {
	progress: number;
	buffer: number;
}
