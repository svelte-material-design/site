import type { InputFieldConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import { getIconCode } from "src/components/configurator/smui-components/icons";
import {
	getBaseImports,
	getBaseInputFieldProps,
	getBaseInputProps,
} from "src/components/configurator/smui-components/input/code";

export function script(configurations: InputFieldConfigurations) {
	const {
		leadingIcon,
		trailingIcon,
		prefix,
		suffix,
		helperText,
		characterCounter,
	} = configurations;

	const imports = removeEmptyLines(source`
		${getImportCode(
			[
				"InputField",
				"Input",
				[leadingIcon || trailingIcon, "Icon"],
				[prefix, "Prefix"],
				[suffix, "Suffix"],
				[helperText || characterCounter, "HelperText"],
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

export function template(configurations: InputFieldConfigurations) {
	const { variant, lineRipple, helperText, characterCounter } = configurations;

	const code = generateSvelteTagCode({
		tag: "InputField",
		props: [
			...getBaseInputFieldProps(configurations),
			[lineRipple, "lineRipple"],
			[variant !== "filled", `variant="${variant}"`],
		],
		content: source`
			<Content>
				${getContentCode(configurations)}
			</Content>
			${helperText || characterCounter ? getHelperTextCode(configurations) : ""}
		`,
	});

	return code;
}

function getContentCode(configurations: InputFieldConfigurations) {
	const { leadingIcon, trailingIcon, prefix, suffix, label } = configurations;

	const labelCode = label ? `<span slot="label">${label}</span>` : "";

	const leadingIconCode = leadingIcon
		? getIconCode(
				{},
				{
					type: leadingIcon,
					position: "leading",
				}
		  )
		: "";

	const trailingIconCode = trailingIcon
		? getIconCode(
				{},
				{
					type: trailingIcon,
					position: "trailing",
				}
		  )
		: "";

	const prefixCode = prefix
		? source`
		<Prefix>${prefix}</Prefix>
	`
		: "";

	const suffixCode = suffix
		? source`
		<Suffix>${suffix}</Suffix>
	`
		: "";

	const code = source`
		${labelCode ? labelCode : ""}
		${leadingIconCode ? leadingIconCode : ""}
		${prefixCode ? prefixCode : ""}
		${getInputCode(configurations)}
		${suffixCode ? suffixCode : ""}
		${trailingIconCode ? trailingIconCode : ""}
	`;

	return removeEmptyLines(code);
}

function getInputCode(configurations: InputFieldConfigurations) {
	const {
		useDatalist,
		size,
		pattern,
		minlength,
		step,
		min,
		max,
		type,
	} = configurations;

	const code = generateSvelteTagCode({
		tag: "Input",
		props: [
			...getBaseInputProps(configurations),
			[minlength, `minlength={${minlength}}`],
			[step, `step={${step}}`],
			[min, `min={${min}}`],
			[max, `max={${max}}`],
			[type, `type="${type}"`],
			[size, `size="${size}"`],
			[pattern, `pattern="${pattern}"`],
		],
		content: useDatalist
			? source`
			<div slot="options">
				<option value="Red Dead Redemption" />
				<option value="Grand Theft Auto" />
				<option value="Max Payne" />
			</div>
		`
			: "",
	});

	return code;
}

function getHelperTextCode(configurations: InputFieldConfigurations) {
	const {
		helperText,
		characterCounter,
		persistentHelperText,
		helperTextAsValidationMsg,
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
			${characterCounter ? `<CharacterCounter />` : ""}
		`,
	});

	return code;
}
