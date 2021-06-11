import type { AspectRatio } from "@svelte-material-design/core/card";

export type ActionsLayout = "single" | "multi" | "icons" | "all" | "full-bleed";

export interface CardConfigurations {
	outlined: boolean;

	title: string;
	subtitle: string;
	text: string;

	bodyTitle: string;
	bodySubtitle: string;
	bodyText: string;
	media: AspectRatio;
	mediaContent: string;
	horizontalLayout: boolean;
	clickableBody: boolean;
	primaryActionRipple: boolean;

	actionsLayout: ActionsLayout;
}
