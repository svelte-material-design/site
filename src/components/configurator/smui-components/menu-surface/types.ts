import type {
	MenuSurfaceVariant,
	MenuSurfaceAnchorCorner,
	MenuSurfaceAnchorMargin,
} from "@svelte-material-design/core/menu-surface";

export interface MenuSurfaceConfigurations {
	open: boolean;
	anchorCorner: MenuSurfaceAnchorCorner;
	anchorFlipRtl: boolean;
	quickOpen: boolean;
	variant: MenuSurfaceVariant;
	anchorMargin: MenuSurfaceAnchorMargin;
}
