import type {
	MenuSurfaceVariant,
	MenuSurfaceAnchorCorner,
	MenuSurfaceAnchorMargin,
	AbsoluteMenuSurfacePosition,
} from "@svelte-material-design/core/menu-surface";

export interface MenuSurfaceConfigurations {
	open: boolean;
	anchorCorner: MenuSurfaceAnchorCorner;
	anchorFlipRtl: boolean;
	quickOpen: boolean;
	variant: MenuSurfaceVariant;
	anchorMargin: MenuSurfaceAnchorMargin;
	hoisted: boolean;
	anchor: AbsoluteMenuSurfacePosition;
}
