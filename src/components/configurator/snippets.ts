import { StringListToFilter } from "@smui/core/common/functions";
import { generateSvelteTagCode, TagCodeGenerationProps } from "./code";
import { GraphicType } from "@smui/core/common/components";

export type Position = "leading" | "trailing";

export function getIconCode(
	options: Partial<TagCodeGenerationProps>,
	{
		type,
		position,
		clickable,
		additionalProps = [],
	}: {
		type: GraphicType;
		position: Position;
		clickable?: boolean;
		additionalProps?: StringListToFilter;
	}
) {
	const { tag, content, indentSize, indentFirstLine, props } = options;

	if (type) {
		return generateSvelteTagCode({
			tag: tag ?? "Icon",
			props: [
				[type !== "icon", `type="${type}"`],
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

function getDefaultIconProps(type: GraphicType, position: Position) {
	if (type === "svg") {
		return [`props={{viewBox: "0 0 24 24"}}`];
	} else if (type === "img") {
		return position === "leading"
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

function getDefaultIconContent(type: GraphicType, position: Position) {
	switch (type) {
		case "svg":
			return position === "leading"
				? `<circle cx="12" cy="12" r="12">`
				: `<polygon points="0,24 12,0 24,24" />`;
		case "img":
			return "";
		case "icon":
		default:
			return position === "leading" ? `favorite` : `delete`;
	}
}

export function getHelperTextCode({
	text,
	characterCounter,
	props,
	indentSize,
	indentFirstLine,
}: {
	text?: string;
	characterCounter?: boolean;
	props?: StringListToFilter;
	indentSize?: number;
	indentFirstLine?: boolean;
}) {
	if (text || characterCounter) {
		return generateSvelteTagCode({
			tag: "HelperText",
			props,
			content: getHelperTextContentCode(text, characterCounter),
			indentSize,
			indentFirstLine,
		});
	} else {
		return "";
	}
}

function getHelperTextContentCode(text: string, characterCounter: boolean) {
	return `
		${text ? `<span slot="label">${text}</span>` : ""}
		${characterCounter ? `<CharacterCounter />` : ""}
	`;
}
