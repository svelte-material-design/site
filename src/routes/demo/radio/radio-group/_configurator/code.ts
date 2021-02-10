import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import { template as checkboxTemplate } from "../../_configurator/code";
import type { RadioGroupConfigurations } from "./types";

export function script(configurations: RadioGroupConfigurations) {
	const code = source`
		<script>
			${getImportCode(["Radio", "RadioGroup"], "checkbox")}
			${getImportCode(["FormField", "Label"], "form-field")}

			let checked;
		</script>
	`;

	return removeEmptyLines(code);
}

export function template(configurations: RadioGroupConfigurations) {
	const code = generateSvelteTagCode({
		tag: "RadioGroup",
		props: [],
		content: source`
			${getRadiosCode(configurations)}
		`,
	});

	return removeEmptyLines(code);
}

function getRadiosCode(configurations: RadioGroupConfigurations) {
	const code =
		configurations.items
			?.map((item) => {
				return checkboxTemplate(item);
			})
			.join("\n") ?? "";

	return removeEmptyLines(code);
}
