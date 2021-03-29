import type { SelectConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import { getIconCode } from "src/components/configurator/smui-components/icons";
import {
	getInputFieldImports,
	getHelperTextCode,
	getSelectPropsMap,
} from "src/components/configurator/smui-components/input/code";
import { createSelectOptionsCode } from "src/components/configurator/smui-components/menu/code";

export function script(configurations: SelectConfigurations) {
	const { leadingIcon, helperText } = configurations;

	const imports = removeEmptyLines(source`
		${getImportCode(
			[
				"Select",
				"Options",
				"Option",
				"OptionContent",
				"Input",
				[leadingIcon, "LeadingIcon"],
				[helperText, "HelperText"],
				...getInputFieldImports(configurations),
			],
			"select"
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

export function template(configurations: SelectConfigurations) {
	const { helperText } = configurations;

	const map = getSelectPropsMap(configurations);

	const code = generateSvelteTagCode({
		tag: "Select",
		props: Object.values(map),
		content: source`
			<Content>
				${getContentCode(configurations)}
			</Content>
			${helperText ? getHelperTextCode(configurations) : ""}
		`,
	});

	return code;
}

function getContentCode(configurations: SelectConfigurations) {
	const { leadingIcon, label } = configurations;

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

	const code = source`
		${labelCode ? labelCode : ""}
		${leadingIconCode ? leadingIconCode : ""}
		${getInputCode()}
		${createSelectOptionsCode(configurations)}
	`;

	return removeEmptyLines(code);
}

function getInputCode() {
	const code = generateSvelteTagCode({
		tag: "Input",
	});

	return code;
}
