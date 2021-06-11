import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import { template as checkboxTemplate } from "../../_configurator/code";
import type { CheckboxGroupConfigurations } from "./types";

export function script(configurations: CheckboxGroupConfigurations) {
	const code = source`
		<script>
			${getImportCode(["Checkbox", "CheckboxGroup"], "checkbox")}
			${getImportCode(["FormField", "Label"], "form-field")}

			let checked;
		</script>
	`;

	return removeEmptyLines(code);
}

export function template(configurations: CheckboxGroupConfigurations) {
	const code = generateSvelteTagCode({
		tag: "CheckboxGroup",
		props: [],
		content: source`
			${getCheckboxesCode(configurations)}
		`,
	});

	return removeEmptyLines(code);
}

function getCheckboxesCode(configurations: CheckboxGroupConfigurations) {
	const code =
		configurations.items
			?.map((item) => {
				return checkboxTemplate(item);
			})
			.join("\n") ?? "";

	return removeEmptyLines(code);
}
