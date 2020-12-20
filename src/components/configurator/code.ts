import {
	StringListToFilter,
	filterStringList,
} from "@smui/core/common/functions";
import { source, stripIndent } from "common-tags";

export function generateSvelteCode({
	tag = "",
	props = [],
	content = "",
	indentSize,
	after,
	before,
}: TagCodeGenerationProps) {
	const filteredProps = filterStringList(props) || [];

	const propsIntend = `
			`.substr(1);
	let parsedProps = filteredProps.join(" \n" + propsIntend);
	if (parsedProps.length > 0) parsedProps = " " + parsedProps;

	const code = stripIndent`
${before ? indentCode({ code: stripIndent(before), indentSize: 2 }) : ""}
		<${tag}${parsedProps}>
${indentCode({ code: stripIndent(content), indentSize: 3 })}
		</${tag}>
${after ? indentCode({ code: stripIndent(after), indentSize: 2 }) : ""}
	`;

	const result = indentCode({ code, indentSize });

	return result;
}

export function generateSvelteTagCode({
	tag = "",
	props = [],
	content = "",
}: TagCodeGenerationProps) {
	const filteredProps = filterStringList(props) || [];

	let parsedProps = filteredProps.join(" ${escape}" + "\t");
	if (parsedProps.length > 0) parsedProps = " " + parsedProps;

	const code = source`
		<${tag}${parsedProps}>
			${content.trim()}
		</${tag}>
	`.trim();

	return code;
}

export function generateSCSSCode({
	content = "",
	indentSize,
}: {
	content: string;
	indentSize?: number;
}) {
	const code = stripIndent(content);
	const result = indentCode({ code, indentSize });
	return result;
}

export function indentCode({
	code,
	indentSize = 0,
	indentFirstLine = true,
	isContent = false,
}: {
	code: string;
	indentSize?: number;
	indentFirstLine?: boolean;
	isContent?: boolean;
}) {
	const startIndent = indentFirstLine ? "\t".repeat(indentSize) : "";

	let innerIndentSize = isContent ? indentSize + 3 : indentSize;
	const indent = "\t".repeat(innerIndentSize);

	const result = startIndent + code.replace(/\n/g, "\n" + indent);
	return result;
}

export function removeEmptyLines(code: string) {
	return code
		.split("\n")
		.filter((e) => e.match(/[^ \t]/))
		.join("\n");
}

export function tab({
	code,
	size,
	firstLine,
}: {
	code: string;
	size: number;
	firstLine?: boolean;
}) {
	const tab = "\t".repeat(size);
	const tabbedCode = (firstLine ? tab : "") + code.split("\n").join("\n" + tab);
	return tabbedCode;
}

export interface TagCodeGenerationProps {
	tag: string;
	props?: StringListToFilter;
	content?: string;
	indentSize?: number;
	indentFirstLine?: boolean;
	after?: string;
	before?: string;
}
