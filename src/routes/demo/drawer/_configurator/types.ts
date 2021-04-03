import type { DrawerVariant } from "@svelte-material-design/core/drawer";

export interface DrawerConfigurations {
	layout: string;
	variant: DrawerVariant;
	open: boolean;
	belowTopAppBar: boolean;
	title: string;
	subtitle: string;
}
