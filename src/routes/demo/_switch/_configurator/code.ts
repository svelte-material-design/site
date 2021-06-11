import type { SwitchConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";

export function script(configurations: SwitchConfigurations) {
	const importCodes = removeEmptyLines(source`
		${getImportCode(["Switch", "Input"], "checkbox")}
		${getImportCode(["FormField", "Label"], "form-field")}
	`);

	const code = source`
		<script>
			${importCodes}

			let checked;
		</script>
	`;

	return code;
}

export function template(
	configurations: SwitchConfigurations,
	has2WayBinding = true
) {
	const { label } = configurations;

	const code = generateSvelteTagCode({
		tag: "FormField",
		props: [],
		content: source`
			${getSwitchCode(configurations, has2WayBinding)}
			<Label>${label}</Label>
		`,
	});

	return removeEmptyLines(code);
}

function getSwitchCode(
	configurations: SwitchConfigurations,
	has2WayBinding = true
) {
	const { ripple, checked, disabled, readonly, value } = configurations;

	const code = generateSvelteTagCode({
		tag: "Switch",
		props: [
			[has2WayBinding, "bind:checked"],
			[value, `value="${value}"`],
			[!ripple, "ripple={false}"],
			[!has2WayBinding && checked, "checked"],
			[disabled, "disabled"],
			[readonly, "readonly"],
		],
		content: source`
			<Input name="switch" />
		`,
	});

	return removeEmptyLines(code);
}
