import { generateSvelteTagCode, TagCodeGenerationProps } from "../../code";
import { GraphicType } from "@smui/core/common/components";
import { StringListToFilter } from "@smui/core/common/functions";
import { IconType } from "./types";

export type Position = "leading" | "trailing";

export function getIconCode(
	options: Partial<TagCodeGenerationProps>,
	{
		type,
		position,
		clickable,
		additionalProps = [],
	}: {
		type: IconType;
		position?: Position;
		clickable?: boolean;
		additionalProps?: StringListToFilter;
	}
) {
	const { tag, content, indentSize, indentFirstLine, props } = options;
	const graphicType = getGraphicType(type);

	if (type) {
		return generateSvelteTagCode({
			tag: tag ?? "Icon",
			props: [
				[graphicType !== "icon", `type="${graphicType}"`],
				[clickable, `role="button"`],
				...(props ? props : getDefaultIconProps(type, position)),
				...additionalProps,
			],
			content: content ? content : getDefaultIconContent(type, position),
			indentSize,
			indentFirstLine,
		});
	} else {
		return "";
	}
}

function getDefaultIconProps(type: IconType, position: Position) {
	if (type === "svg") {
		return [`props={{viewBox: "0 0 24 24"}}`];
	} else if (type === "img") {
		return position === "leading" || !position
			? [
					`props={{
				src: '/icons/emojis/upside-down-face.png',
				alt: 'Upside down face'
			}}`,
			  ]
			: [
					`props={{
				src: '/icons/emojis/grinning-face.png',
				alt: 'Grinning face'
			}}`,
			  ];
	} else {
		return [];
	}
}

function getDefaultIconContent(type: IconType, position: Position) {
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
				? `favorite`
				: position === "trailing"
				? `delete`
				: `refresh`;
	}
}

export function getGraphicType(iconType: IconType): GraphicType {
	if (iconType === "material-icon") {
		return "icon";
	} else {
		return iconType;
	}
}
