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
		hoisted,
		anchor,
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
		[anchor, `anchor={{x: ${anchor?.x}, y: ${anchor?.y}}}`],
		[hoisted, "hoisted"],
	];
}

export function getMenuSurfaceParentProps(
	configurations: MenuSurfaceConfigurations
): StringListToFilter {
	const { anchor } = configurations;

	return [[anchor, `style="position: relative;"`]];
}
