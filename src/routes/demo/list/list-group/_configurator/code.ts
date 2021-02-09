import type { ListGroupConfigurations } from "./types";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import { source } from "common-tags";

export function script(configurations: ListGroupConfigurations) {
	const { showSeparator, showSubHeader } = configurations;

	const imports = removeEmptyLines(
		getImportCode(
			[
				"ListGroup",
				"List",
				"Item",
				"Content",
				[showSeparator, "ListGroupSeparator"],
				[showSubHeader, "SubHeader"],
			],
			"list"
		)
	);

	const code = source`
		<script>
			${imports}
		</script>
	`;

	return code;
}

export function template(configurations: ListGroupConfigurations) {
	const code = generateSvelteTagCode({
		tag: "ListGroup",
		props: [],
		content: getContentCode(configurations),
	});

	return removeEmptyLines(code);
}

function getContentCode(configurations: ListGroupConfigurations) {
	return source`
		${getListCode(1)}
		${getSubHeaderCode(configurations)}
		${getSeparatorCode(configurations)}
		${getListCode(2)}
	`;
}

function getListCode(index: number) {
	return source`
		<List>
			<Item value="group-item-1">
				<Content>List ${index} Item 1</Content>
			</Item>
			<Item value="group-item-2">
				<Content>List ${index} Item 2</Content>
			</Item>
		</List>
	`;
}

function getSubHeaderCode({ showSubHeader }: ListGroupConfigurations) {
	if (showSubHeader) {
		return source`
		<SubHeader>List 1 Sub Header</SubHeader>
		`;
	} else {
		return "";
	}
}

function getSeparatorCode({ showSeparator }: ListGroupConfigurations) {
	if (showSeparator) {
		return source`
		<Seperator>
		`;
	} else {
		return "";
	}
}
