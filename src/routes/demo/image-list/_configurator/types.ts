import type { ImageListVariant } from "@svelte-material-design/core/image-list";

export interface ImageListConfigurations {
	columns: number;
	variant: ImageListVariant;
	aspect: `${number}:${number}`;
	textProtection: boolean;
	aspectContainer: boolean;
	label: boolean;
}
