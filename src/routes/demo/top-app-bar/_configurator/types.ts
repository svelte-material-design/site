import type {
	TopAppBarVariant,
	TopAppBarColor,
} from "@svelte-material-design/core/top-app-bar";

export interface TopAppBarConfigurations {
	variant: TopAppBarVariant;
	color: TopAppBarColor;
	prominent: boolean;
	dense: boolean;
}
