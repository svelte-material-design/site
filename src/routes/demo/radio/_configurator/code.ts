import type { RadioConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";

export function script(props: RadioConfigurations) {
	const code = source`
		<script>
			${getImportCode(["Radio"], "radio")}
			${getImportCode(["FormField", "Label"], "form-field")}

			let checked;
		</script>
	`;

	return code;
}

export function template(props: RadioConfigurations) {
	const { label } = props;

	const code = generateSvelteTagCode({
		tag: "FormField",
		props: [],
		content: source`
			${getRadioCode(props)}
			<Label>${label}</Label>
		`,
	});

	return removeEmptyLines(code);
}

function getRadioCode(props: RadioConfigurations) {
	const { ripple, accessibleTouch, checked, disabled, readonly, value } = props;

	const code = generateSvelteTagCode({
		tag: "Radio",
		props: [
			"bind:checked",
			`name="radio"`,
			`value="${value}"`,
			[!ripple, "ripple={false}"],
			[!accessibleTouch, "accessibleTouch={false}"],
			[checked, "checked"],
			[disabled, "disabled"],
			[readonly, "readonly"],
		],
	});

	return removeEmptyLines(code);
}
