import { RangeConfigurations, SliderConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";

export function script(props: SliderConfigurations) {
	const code = source`
		<script>
			${getImportCode(["Slider"], "slider")}
			${getImportCode(["FormField", "Label"], "form-field")}

			let value;
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
			${getRangeCode(rangeStart)}
			${getRangeCode(rangeEnd)}
		`,
	});

	return removeEmptyLines(code);
}

function getRangeCode(props: RangeConfigurations) {
	if (!props) return "";

	const { min, max } = props;

	const code = generateSvelteTagCode({
		tag: "Range",
		props: ["bind:value", [min > 0, `min={${min}}`], [max > 0, `max={${max}}`]],
	});

	return removeEmptyLines(code);
}
