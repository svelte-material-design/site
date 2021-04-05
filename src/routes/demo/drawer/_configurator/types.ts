import type { DrawerVariant } from "@svelte-material-design/core/drawer";

export interface DrawerConfigurations {
	layout: "full-height" | "below-top-app-bar";
	variant: DrawerVariant;
	open: boolean;
	belowTopAppBar: boolean;
	title: string;
	subtitle: string;
}
