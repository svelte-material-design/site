import { StringListToFilter } from "@smui/core/common/functions";
import { generateSvelteTagCode } from "./code";

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
