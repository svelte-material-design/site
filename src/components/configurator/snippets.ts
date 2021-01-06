import type { StringListToFilter } from "@smui/core/common/functions";
import { generateSvelteTagCode } from "./code";

export function getHelperTextCode({
	text,
	characterCounter,
	props,
}: {
	text?: string;
	characterCounter?: boolean;
	props?: StringListToFilter;
}) {
	if (text || characterCounter) {
		return generateSvelteTagCode({
			tag: "HelperText",
			props,
			content: getHelperTextContentCode(text, characterCounter),
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
