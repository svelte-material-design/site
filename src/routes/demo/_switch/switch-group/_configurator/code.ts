import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import { template as switchTemplate } from "../../_configurator/code";
import type { SwitchGroupConfigurations } from "./types";

export function script(configurations: SwitchGroupConfigurations) {
	const importCodes = removeEmptyLines(source`
		${getImportCode(["Switch", "SwitchGroup", "Input"], "switch")}
		${getImportCode(["FormField", "Label"], "form-field")}
	`);

	const code = source`
		<script>
			${importCodes}

			let value;
		</script>
	`;

	return code;
}

export function template(configurations: SwitchGroupConfigurations) {
	const code = generateSvelteTagCode({
		tag: "SwitchGroup",
		props: [],
		content: source`
			${getSwitchesCode(configurations)}
		`,
	});

	return removeEmptyLines(code);
}

function getSwitchesCode(configurations: SwitchGroupConfigurations) {
	const code =
		configurations.items
			?.map((item) => {
				return switchTemplate(item, false);
			})
			.join("\n") ?? "";

	return removeEmptyLines(code);
}
