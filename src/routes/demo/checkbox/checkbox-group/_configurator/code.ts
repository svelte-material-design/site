import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import { CheckboxConfigurationsItem } from "./types";

export function script() {
	const code = source`
		<script>
			${getImportCode(["Checkbox"], "checkbox")}
			${getImportCode(["FormField", "Label"], "form-field")}

			let checked;
		</script>
	`;

	return removeEmptyLines(code);
}

export function template(items: CheckboxConfigurationsItem[]) {
	// const code = generateSvelteTagCode({
	// 	tag: "FormField",
	// 	props: [],
	// 	content: source`
	// 		${getCheckboxCode(props)}
	// 		<Label>Label</Label>
	// 	`,
	// });

	// return removeEmptyLines(code);

	return "";
}

function getCheckboxCode(props: CheckboxConfigurations) {
	const {
		ripple,
		expandedTouchTarget,
		density,
		checked,
		allowIndeterminated,
		disabled,
		readonly,
		required,
	} = props;

	const code = generateSvelteTagCode({
		tag: "Checkbox",
		props: [
			"bind:checked",
			`name="checkbox"`,
			`value="checkbox-value"`,
			[!ripple, "ripple={false}"],
			[!expandedTouchTarget, "expandedTouchTarget={false}"],
			[density, `density={${density}}`],
			[checked, "checked"],
			[checked == null, "checked={null}"],
			[allowIndeterminated, "allowIndeterminated"],
			[disabled, "disabled"],
			[readonly, "readonly"],
			[required, "required"],
		],
	});

	return removeEmptyLines(code);
}
