import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import { template as checkboxTemplate } from "../../_configurator/code";
import type { CheckboxConfigurationsItem } from "./types";

export function script() {
	const code = source`
		<script>
			${getImportCode(["Checkbox", "CheckboxGroup"], "checkbox")}
			${getImportCode(["FormField", "Label"], "form-field")}

			let checked;
		</script>
	`;

	return removeEmptyLines(code);
}

export function template(items: CheckboxConfigurationsItem[]) {
	const code = generateSvelteTagCode({
		tag: "CheckboxGroup",
		props: [],
		content: source`
			${getCheckboxesCode(items)}
		`,
	});

	return removeEmptyLines(code);
}

function getCheckboxesCode(items: CheckboxConfigurationsItem[]) {
	const code =
		items
			?.map((item) => {
				return checkboxTemplate(item);
			})
			.join("\n") ?? "";

	return removeEmptyLines(code);
}
