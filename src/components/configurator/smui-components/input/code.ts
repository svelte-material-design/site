import type {
	InputFieldConfigurations,
	TextAreaFieldConfigurations,
} from "./types";
import type { StringList } from "@raythurnevoid/strings-filter";
import { source } from "common-tags";
import { generateSvelteTagCode, removeEmptyLines } from "../../code";
import type { TagCodeGenerationProps } from "../../code";
import { getListPropsMap } from "../list";
import type { SelectConfigurations } from "src/routes/demo/select/_configurator/types";
import type { StringListToFilter } from "@svelte-material-design/core/common/functions";
import { getIconCode } from "../icons";
import { createSelectOptionsCode } from "../menu/code";

export function getInputFieldImports(
	configurations: Partial<InputFieldConfigurations>
): StringList {
	const { characterCounter } = configurations;

	return ["Content", [characterCounter, "CharacterCounter"]] as StringList;
}

export function getInputFieldCode(
	configurations: Partial<InputFieldConfigurations>,
	options?: InputFieldCodeOptions
) {
	const { helperText, characterCounter } = configurations;

	const props =
		options?.props ?? Object.values(getInputFieldPropsMap(configurations));

	const code = generateSvelteTagCode({
		tag: options?.tag ?? "InputField",
		props,
		content: source`
			<Content>
				${getInputFieldContentCode(configurations)}
				${options?.contentFooter ? options?.contentFooter : ""}
			</Content>
			${helperText || characterCounter ? getHelperTextCode(configurations) : ""}
		`,
	});

	return code;
}

function getInputFieldContentCode(
	configurations: Partial<InputFieldConfigurations>
) {
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

function getInputCode(configurations: Partial<InputFieldConfigurations>) {
	const { useDatalist } = configurations;

	const map = getInputFieldPropsMap(configurations);

	const code = generateSvelteTagCode({
		tag: "Input",
		props: Object.values(map),
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

export function getHelperTextCode(
	configurations: Partial<InputFieldConfigurations>
) {
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

export function getInputFieldInputPropsMap(
	configurations: Partial<InputFieldConfigurations>
) {
	const {
		readonly,
		placeholder,
		size,
		maxlength,
		minlength,
		step,
		min,
		max,
		type,
		pattern,
	} = configurations;

	const map = {
		readonly: [readonly, "readonly"],
		placeholder: [placeholder, `placeholder="${placeholder}"`],
		size: [size, `size="${size}"`],
		maxlength: [maxlength, `maxlength={${maxlength}}`],
		minlength: [minlength, `minlength={${minlength}}`],
		step: [step, `step={${step}}`],
		min: [min, `min={${min}}`],
		max: [max, `max={${max}}`],
		type: [type, `type="${type}"`],
		pattern: [pattern, `pattern="${pattern}"`],
	};

	return map as {
		[k in keyof typeof map]: StringListToFilter[0];
	};
}

export function getInputFieldPropsMap(
	configurations: Partial<InputFieldConfigurations>
) {
	const { title, variant, disabled, ripple, lineRipple } = configurations;

	const map = {
		value: "bind:value",
		invalid: "bind:invalid",
		ripple: [ripple === false, `ripple={${ripple}}`],
		variant: [variant !== "filled", `variant="${variant}"`],
		disabled: [disabled, "disabled"],
		lineRipple: [lineRipple === false, `lineRipple={${lineRipple}}`],
		title: [title, `title="${title}"`],
	};

	return map as {
		[k in keyof typeof map]: StringListToFilter[0];
	};
}

export function getTextAreaInputPropsMap(
	configurations: Partial<TextAreaFieldConfigurations>
) {
	const { wrap, cols, rows } = configurations;

	const inputProps = getInputFieldInputPropsMap(configurations);

	const map = {
		wrap: [wrap, `wrap="${wrap}"`],
		cols: [cols, `cols={${cols}}`],
		rows: [rows, `rows={${rows}}`],
		maxlength: inputProps.maxlength,
	};

	return map as {
		[k in keyof typeof map]: StringListToFilter[0];
	};
}

export function getTextAreaPropsMap(
	configurations: Partial<TextAreaFieldConfigurations>
) {
	const inputFieldProps = getInputFieldPropsMap(configurations);

	const map = {
		value: inputFieldProps.value,
		invalid: inputFieldProps.invalid,
		disabled: inputFieldProps.disabled,
		title: inputFieldProps.title,
	};

	return map as {
		[k in keyof typeof map]: StringListToFilter[0];
	};
}

export function getSelectPropsMap(
	configurations: Partial<SelectConfigurations>
) {
	const inputProps = getInputFieldInputPropsMap(configurations);
	const inputFieldProps = getInputFieldPropsMap(configurations);
	const listProps = getListPropsMap(configurations);

	const map = {
		value: inputFieldProps.value,
		invalid: inputFieldProps.invalid,
		ripple: inputFieldProps.ripple,
		readonly: inputProps.readonly,
		title: inputFieldProps.title,
		lineRipple: inputFieldProps.lineRipple,
		maxlength: inputProps.maxlength,
		disabled: inputFieldProps.disabled,
		nullable: listProps.nullable,
	};

	return map as {
		[k in keyof typeof map]: StringListToFilter[0];
	};
}

export function getSelectCode(configurations: SelectConfigurations): any {
	const propsMap = getSelectPropsMap(configurations);

	const code = getInputFieldCode(configurations, {
		tag: "Select",
		props: Object.values(propsMap),
		contentFooter: createSelectOptionsCode(configurations),
	});

	return code;
}

interface InputFieldCodeOptions
	extends Pick<TagCodeGenerationProps, "tag" | "props"> {
	contentFooter?: string;
}
