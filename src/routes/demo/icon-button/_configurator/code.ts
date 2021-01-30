import type { IconButtonConfigurations } from "./types";
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
		</script>
	`;

	return removeEmptyLines(code);
}

export function template(props: IconButtonConfigurations) {
	const { disabled, color, link, ripple } = props;

	const code = generateSvelteTagCode({
		tag: "IconButton",
		props: [
			[!ripple, `ripple={false}`],
			[color !== "inherit", `color="${color}"`],
			[disabled, `disabled`],
			[link, `href="javascript:void(0)"`],
		],
		content: source`
			${getIconCode(props)}
		`,
	});

	return removeEmptyLines(code);
}

function getIconCode(props: IconButtonConfigurations): string {
	const { iconType } = props;

	return getCommonIconCode(
		{},
		{
			type: iconType,
		}
	);
}
