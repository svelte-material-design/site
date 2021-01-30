import { RangeConfigurations, SliderConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";

export function script(props: SliderConfigurations) {
	const { rangeEnd } = props;

	const code = source`
		<script>
			${getImportCode(["Slider", "Range", "Thumb"], "slider")}
			${getImportCode(["FormField", "Label"], "form-field")}

			${removeEmptyLines(source`
				let ${rangeEnd ? "valueStart" : "value"};
				${rangeEnd ? "let valueEnd;" : ""}
			`)}
		</script>
	`;

	return code;
}

export function template(props: SliderConfigurations) {
	const { label } = props;

	const code = generateSvelteTagCode({
		tag: "FormField",
		props: [],
		content: source`
			${label ? `<Label>${label}</Label>` : ""}
			${getSliderCode(props)}
		`,
	});

	return removeEmptyLines(code);
}

function getSliderCode(props: SliderConfigurations) {
	const { disabled, rangeStart, rangeEnd } = props;

	const code = generateSvelteTagCode({
		tag: "Slider",
		props: [[disabled, "disabled"]],
		content: source`
			${getRangeCode(rangeStart, rangeEnd ? "valueStart" : "value")}
			${getRangeCode(rangeEnd, "valueEnd")}
		`,
	});

	return removeEmptyLines(code);
}

function getRangeCode(props: RangeConfigurations, valueName: string) {
	if (!props) return "";

	const { min, max } = props;

	const code = generateSvelteTagCode({
		tag: "Range",
		props: [
			`bind:${valueName}`,
			[min > 0, `min={${min}}`],
			[max > 0, `max={${max}}`],
		],
		content: "<Thumb />",
	});

	return removeEmptyLines(code);
}
