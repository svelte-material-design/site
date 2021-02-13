import { StringListToFilter } from "@smui/core/common/functions";
import { MenuSurfaceConfigurations } from "./types";

export function getMenuSurfaceCodeProps(
	configurations: MenuSurfaceConfigurations
): StringListToFilter {
	const {
		anchorCorner,
		anchorFlipRtl,
		anchorMargin,
		quickOpen,
		variant,
	} = configurations;

	return [
		"bind:open",
		[anchorCorner !== "bottom-start", `anchorCorner="${anchorCorner}"`],
		[anchorFlipRtl === false, "anchorFlipRtl={false}"],
		[quickOpen, "quickOpen"],
		[variant, `variant={${variant}}`],
		[
			anchorMargin,
			`anchorMargin={${
				anchorMargin && JSON.stringify(anchorMargin).replaceAll(`"`, "")
			}}`,
		],
	];
}
