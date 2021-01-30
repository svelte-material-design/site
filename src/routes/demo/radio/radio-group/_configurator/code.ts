import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import { template as checkboxTemplate } from "../../_configurator/code";
import type { RadioConfigurationsItem } from "./types";

export function script() {
	const code = source`
		<script>
			${getImportCode(["Radio", "RadioGroup"], "checkbox")}
			${getImportCode(["FormField", "Label"], "form-field")}

			let checked;
		</script>
	`;

	return removeEmptyLines(code);
}

export function template(items: RadioConfigurationsItem[]) {
	const code = generateSvelteTagCode({
		tag: "RadioGroup",
		props: [],
		content: source`
			${getRadiosCode(items)}
		`,
	});

	return removeEmptyLines(code);
}

function getRadiosCode(items: RadioConfigurationsItem[]) {
	const code =
		items
			?.map((item) => {
				return checkboxTemplate(item);
			})
			.join("\n") ?? "";

	return removeEmptyLines(code);
}
