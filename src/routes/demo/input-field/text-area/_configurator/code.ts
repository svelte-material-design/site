import type { TextAreaFieldConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import {
	getBaseInputProps,
	getBaseInputFieldProps,
	getBaseImports,
} from "src/components/configurator/smui-components/input/code";

export function script(configurations: TextAreaFieldConfigurations) {
	const { helperText, characterCounter, useInternalCounter } = configurations;

	const imports = removeEmptyLines(source`
		${getImportCode(
			[
				"TextAreaField",
				"TextArea",
				[helperText || (characterCounter && !useInternalCounter), "HelperText"],
				...getBaseImports(configurations),
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

	const code = generateSvelteTagCode({
		tag: "InputField",
		props: [...getBaseInputFieldProps(configurations)],
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
	const { cols, rows, wrap } = configurations;

	const code = generateSvelteTagCode({
		tag: "Input",
		props: [
			...getBaseInputProps(configurations),
			[wrap, `wrap="${wrap}"`],
			[cols, `cols={${cols}}`],
			[rows, `rows={${rows}}`],
		],
	});

	return code;
}

function getHelperTextCode(configurations: TextAreaFieldConfigurations) {
	const {
		helperText,
		characterCounter,
		persistentHelperText,
		helperTextAsValidationMsg,
		useInternalCounter,
	} = configurations;

	const code = generateSvelteTagCode({
		tag: "HelperText",
		props: [
			[persistentHelperText, "persistent"],
			[helperTextAsValidationMsg, "validationMsg"],
		],
		content: `
			${
				helperText
					? source`
					<span slot="label">${helperText}</span>
				`
					: ""
			}
			${characterCounter && !useInternalCounter ? `<CharacterCounter />` : ""}
		`,
	});

	return code;
}
