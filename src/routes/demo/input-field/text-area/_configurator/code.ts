import type { TextAreaFieldConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import {
	getInputFieldImports,
	getHelperTextCode,
	getSelectPropsMap,
	getTextAreaPropsMap,
} from "src/components/configurator/smui-components/input/code";

export function script(configurations: TextAreaFieldConfigurations) {
	const { helperText, characterCounter, useInternalCounter } = configurations;

	const imports = removeEmptyLines(source`
		${getImportCode(
			[
				"TextAreaField",
				"TextArea",
				[helperText || (characterCounter && !useInternalCounter), "HelperText"],
				...getInputFieldImports(configurations),
			],
			"input-field"
		)}
	`);

	const code = source`
		<script>
			${imports}

			${removeEmptyLines(source`
				let value;
				let invalid;
			`)}
		</script>
	`;

	return code;
}

export function template(configurations: TextAreaFieldConfigurations) {
	const { helperText, characterCounter, useInternalCounter } = configurations;

	const map = getTextAreaPropsMap(configurations);

	const code = generateSvelteTagCode({
		tag: "InputField",
		props: Object.values(map),
		content: source`
			<Content>
				${getContentCode(configurations)}
			</Content>
			${
				helperText || (characterCounter && !useInternalCounter)
					? getHelperTextCode(configurations)
					: ""
			}
		`,
	});

	return code;
}

function getContentCode(configurations: TextAreaFieldConfigurations) {
	const { label, characterCounter, useInternalCounter } = configurations;

	const labelCode = label ? `<span slot="label">${label}</span>` : "";

	const code = source`
		${labelCode ? labelCode : ""}
		${getInputCode(configurations)}
		${characterCounter && useInternalCounter ? `<CharacterCounter />` : ""}
	`;

	return removeEmptyLines(code);
}

function getInputCode(configurations: TextAreaFieldConfigurations) {
	const map = getSelectPropsMap(configurations);

	const code = generateSvelteTagCode({
		tag: "Input",
		props: Object.values(map),
	});

	return code;
}
