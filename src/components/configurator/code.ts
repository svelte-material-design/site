import {
	StringListToFilter,
	filterStringList,
} from "@smui/core/common/functions";
import { source, stripIndent } from "common-tags";

export function generateSvelteCode({
	tag = "",
	props = [],
	content = "",
}: TagCodeGenerationProps) {
	const filteredProps = filterStringList(props) || [];

	const propsIntend = `
			`.substr(1);
	let parsedProps = filteredProps.join(" \n" + propsIntend);
	if (parsedProps.length > 0) parsedProps = " " + parsedProps;

	const code = source`
		<${tag}${parsedProps}>
			${content}
		</${tag}>
	`;

	return code;
}

export function generateSvelteTagCode({
	tag = "",
	props = [],
	content = "",
}: TagCodeGenerationProps) {
	const filteredProps = filterStringList(props) || [];

	let parsedProps = filteredProps.join(" ${escape}" + "\t");
	if (parsedProps.length) parsedProps = " " + parsedProps;

	const code = source`
		<${tag}${parsedProps}>
			${content.trim()}
		</${tag}>
	`.trim();

	return code.replace(/\$\{escape\}/g, "\n");
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

export function getModulePath(name: string) {
	return `@svelte-material-design/core/${name}`;
}

export function getImportCode(imports: StringListToFilter, moduleName: string) {
	const importsCode = filterStringList(imports).join(",\n");

	return source`
		import {
			${importsCode}
		} from "${getModulePath(moduleName)}";
	`;
}

export interface TagCodeGenerationProps {
	tag: string;
	props?: StringListToFilter;
	content?: string;
}
