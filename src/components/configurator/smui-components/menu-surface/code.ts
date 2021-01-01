import {
	MenuSurfaceAnchorCorner,
	MenuSurfaceVariant,
	MDCMenuDistance,
} from "@smui/core/menu-surface";
import { StringListToFilter } from "@smui/core/common/functions";

export function getProps(props: CodeProps): StringListToFilter {
	const {
		anchorCorner,
		anchorFlipRtl,
		anchorMargin,
		quickOpen,
		variant,
	} = props;

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

export interface CodeProps {
	anchorCorner: MenuSurfaceAnchorCorner;
	anchorFlipRtl: boolean;
	quickOpen: boolean;
	open: boolean;
	variant: MenuSurfaceVariant;
	anchorMargin: MDCMenuDistance;
}
