import { FabConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import { getIconCode } from "src/components/configurator/smui-components/icons";

export function script(props: FabConfigurations) {
	const { variant } = props;

	const code = source`
		<script>
			${getImportCode(["Fab", "Icon", [variant === "extended", "Label"]], "fab")}
		</script>
	`;

	return removeEmptyLines(code);
}

export function template(props: FabConfigurations) {
	const { variant, color, ripple, show, accessibleTouch } = props;

	const code = generateSvelteTagCode({
		tag: "Fab",
		props: [
			[variant !== "regular", `variant="${variant}"`],
			[color !== "secondary", `color="${color}"`],
			[!ripple, `ripple={false}`],
			[!show, `show={false}`],
			[accessibleTouch, `accessibleTouch`],
		],
		content: source`
			${getFabIconCode(props)}
			${variant === "extended" ? `<Label>Label</Label>` : ""}
		`,
	});

	return removeEmptyLines(code);
}

function getFabIconCode(props: FabConfigurations): string {
	const { iconType } = props;

	return getIconCode(
		{},
		{
			type: iconType,
			position: "leading",
		}
	);
}
