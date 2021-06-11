export interface DialogConfigurations {
	open: boolean;
	autoStackButtons: boolean;
	stackedButtons: boolean;
	fullscreen: boolean;
	layout: DialogLayout;
	closeReason: string;
}

export type DialogLayout = "alert" | "list" | "confirmation";
