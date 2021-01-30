import {
	DiscreteSliderRangeConfigurations,
	DiscreteSliderConfigurations,
} from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";

export function script(props: DiscreteSliderConfigurations) {
	const { rangeEnd } = props;

	const code = source`
		<script>
			${getImportCode(["DiscreteSlider", "Range", "Thumb"], "slider")}
			${getImportCode(["FormField", "Label"], "form-field")}

			${removeEmptyLines(source`
				let ${rangeEnd ? "valueStart" : "value"};
				${rangeEnd ? "let valueEnd;" : ""}
			`)}
		</script>
	`;

	return code;
}

export function template(props: DiscreteSliderConfigurations) {
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

function getSliderCode(props: DiscreteSliderConfigurations) {
	const { disabled, rangeStart, rangeEnd, step, tickMarks } = props;

	const code = generateSvelteTagCode({
		tag: "SlidDiscreteSlider",
		props: [
			[disabled, "disabled"],
			[step > 1, `step={${step}}`],
			[tickMarks, "tickMarks"],
		],
		content: source`
			${getRangeCode(rangeStart, rangeEnd ? "valueStart" : "value")}
			${getRangeCode(rangeEnd, "valueEnd")}
		`,
	});

	return removeEmptyLines(code);
}

function getRangeCode(
	props: DiscreteSliderRangeConfigurations,
	valueName: string
) {
	if (!props) return "";

	const { min, max, valueIndicator } = props;

	const code = generateSvelteTagCode({
		tag: "Range",
		props: [
			`bind:${valueName}`,
			[min > 0, `min={${min}}`],
			[max > 0, `max={${max}}`],
			[valueIndicator, "let:value"],
		],
		content: valueIndicator ? "<Thumb>{value}kg</Thumb>" : "<Thumb />",
	});

	return removeEmptyLines(code);
}
