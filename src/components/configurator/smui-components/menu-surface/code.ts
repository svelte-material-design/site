import { StringListToFilter } from "@smui/core/common/functions";
import { MenuSurfaceConfigurations } from "./types";

export function getMenuSurfacePropsMap(
	configurations: Partial<MenuSurfaceConfigurations>
) {
	const {
		anchorCorner,
		anchorFlipRtl,
		anchorMargin,
		quickOpen,
		variant,
		hoisted,
		anchor,
	} = configurations;

	const map = {
		open: "bind:open",
		anchorCorner: [
			anchorCorner !== "bottom-start",
			`anchorCorner="${anchorCorner}"`,
		],
		anchorFlipRtl: [anchorFlipRtl === false, "anchorFlipRtl={false}"],
		quickOpen: [quickOpen, "quickOpen"],
		variant: [variant, `variant={${variant}}`],
		anchorMargin: [
			anchorMargin,
			`anchorMargin={${
				anchorMargin && JSON.stringify(anchorMargin).replaceAll(`"`, "")
			}}`,
		],
		anchor: [anchor, `anchor={{x: ${anchor?.x}, y: ${anchor?.y}}}`],
		hoisted: [hoisted, "hoisted"],
	};

	return map as {
		[k in keyof typeof map]: StringListToFilter[0];
	};
}
export function getMenuSurfaceCodeProps(
	configurations: MenuSurfaceConfigurations
): StringListToFilter {
	const map = getMenuSurfacePropsMap(configurations);

	return [
		map.open,
		map.anchorCorner,
		map.anchorFlipRtl,
		map.variant,
		map.anchorMargin,
		map.anchor,
		map.hoisted,
	];
}

export function getMenuSurfaceParentProps(
	configurations: MenuSurfaceConfigurations
): StringListToFilter {
	const { anchor } = configurations;

	return [[anchor, `style="position: relative;"`]];
}
