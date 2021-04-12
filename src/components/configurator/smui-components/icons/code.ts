import { generateSvelteTagCode, TagCodeGenerationProps } from "../../code";
import type { GraphicType } from "@svelte-material-design/core/common/components";
import type { StringListToFilter } from "@svelte-material-design/core/common/functions";
import type { IconType } from "./types";

export type Position = "leading" | "trailing";

export function getIconCode(
	options: Partial<TagCodeGenerationProps>,
	iconProps: IconConfigurations
) {
	const { tag, content, props } = options;
	const { type, additionalProps = [] } = iconProps;
	const graphicType = getGraphicType(type);

	if (type) {
		return generateSvelteTagCode({
			tag: tag ?? "Icon",
			props: [
				[graphicType !== "icon", `type="${graphicType}"`],
				...(props ? props : getDefaultIconProps(iconProps)),
				...additionalProps,
			],
			content: content ? content : getDefaultIconContent(iconProps),
		});
	} else {
		return "";
	}
}

function getDefaultIconProps(iconProps: IconConfigurations) {
	const { type, position } = iconProps;

	if (type === "svg") {
		return [`viewBox="0 0 24 24"`];
	} else if (type === "img") {
		return position === "leading" || !position
			? [`src="/icons/emojis/upside-down-face.png"`, `alt="Upside down face"`]
			: [`src="/icons/emojis/grinning-face.png"`, `alt="Grinning face"`];
	} else {
		return [];
	}
}

function getDefaultIconContent(iconProps: IconConfigurations) {
	const { type, position } = iconProps;

	const graphicType = getGraphicType(type);
	switch (graphicType) {
		case "svg":
			return position === "leading" || !position
				? `<circle cx="12" cy="12" r="12">`
				: `<polygon points="0,24 12,0 24,24" />`;
		case "img":
			return "";
		case "icon":
		default:
			return position === "leading"
				? "favorite"
				: position === "trailing"
				? "alarm"
				: "refresh";
	}
}

export function getGraphicType(iconType: IconType): GraphicType {
	if (iconType === "material-icon") {
		return "icon";
	} else {
		return iconType;
	}
}

interface IconConfigurations {
	type: IconType;
	position?: Position;
	additionalProps?: StringListToFilter;
}
