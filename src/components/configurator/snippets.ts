import { StringListToFilter } from "@svelte-material-ui-test/core/common/functions";
import { generateSvelteCode } from "./code";
import { GraphicType } from "@smui/core/common/components";

export type Position = "leading" | "trailing";

export function getIconCode({
	type,
	position,
	props,
	additionalProps = [],
	content = "",
	tabs = 0,
}: {
	type: GraphicType;
	position: Position;
	props?: StringListToFilter;
	additionalProps?: StringListToFilter;
	content?: string;
	tabs?: number;
}) {
	if (type) {
		return generateSvelteCode({
			tag: "Icon",
			props: [
				[type !== "icon", `type="${type}"`],
				...(props ? props : getDefaultIconProps(type, position)),
				...additionalProps,
			],
			content: content ? content : getDefaultIconContent(type, position),
		}).replace(/\n/g, "\n" + "\t".repeat(tabs));
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
