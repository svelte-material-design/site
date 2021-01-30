import type { CheckboxConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";

export function script(props: CheckboxConfigurations) {
	const code = source`
		<script>
			${getImportCode(["Checkbox"], "checkbox")}
			${getImportCode(["FormField", "Label"], "form-field")}

			let checked;
		</script>
	`;

	return code;
}

export function template(props: CheckboxConfigurations) {
	const { label } = props;

	const code = generateSvelteTagCode({
		tag: "FormField",
		props: [],
		content: source`
			${getCheckboxCode(props)}
			<Label>${label}</Label>
		`,
	});

	return removeEmptyLines(code);
}

function getCheckboxCode(props: CheckboxConfigurations) {
	const {
		ripple,
		accessibleTouch: expandedTouchTarget,
		checked,
		allowIndeterminated,
		disabled,
		readonly,
		value,
	} = props;

	const code = generateSvelteTagCode({
		tag: "Checkbox",
		props: [
			"bind:checked",
			`name="checkbox"`,
			[value, `value="${value}"`],
			[!ripple, "ripple={false}"],
			[!expandedTouchTarget, "expandedTouchTarget={false}"],
			[checked, "checked"],
			[checked == null, "checked={null}"],
			[allowIndeterminated, "allowIndeterminated"],
			[disabled, "disabled"],
			[readonly, "readonly"],
		],
	});

	return removeEmptyLines(code);
}
