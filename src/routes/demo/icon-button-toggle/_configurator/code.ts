import { IconButtonToggleConfigurations } from "../types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	removeEmptyLines,
	getImportCode,
} from "src/components/configurator";
import { getIconCode as getCommonIconCode } from "src/components/configurator/smui-components/icons";

export function script() {
	const code = source`
		<script>
			${getImportCode(["IconButton", "Icon"], "icon-button")}

			let active;
		</script>
	`;

	return code;
}

export function template(props: IconButtonToggleConfigurations) {
	const { disabled, color, ripple } = props;

	const code = generateSvelteTagCode({
		tag: "IconButtonToggle",
		props: [
			"bind:active",
			[!ripple, `ripple={false}`],
			[color, `color="${color}"`],
			[disabled, `disabled`],
		],
		content: source`
			${getIconCode("IconOn", props)}
			${getIconCode("IconOff", props)}
		`,
	});

	return removeEmptyLines(code);
}

function getIconCode(
	tag: "IconOn" | "IconOff",
	props: IconButtonToggleConfigurations
): string {
	const { iconType } = props;

	return getCommonIconCode(
		{
			tag,
			content: tag === "IconOn" ? "star" : "star_border",
		},
		{
			type: iconType,
		}
	);
}
