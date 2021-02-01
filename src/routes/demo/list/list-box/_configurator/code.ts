import type { ListItemConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSCSSCode,
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import { getIconCode } from "src/components/configurator/smui-components/icons";

export function script(props: ListItemConfigurations) {
	// const { iconOnly, leadingIcon, trailingIcon } = props;
	// const code = source`
	// 	<script>
	// 		${getImportCode(
	// 			["Button", [!iconOnly, "Label"], [leadingIcon || trailingIcon, "Icon"]],
	// 			"button"
	// 		)}
	// 	</script>
	// `;
	// return removeEmptyLines(code);
}

export function template(props: ListItemConfigurations) {
	// const {
	// 	iconOnly,
	// 	customStyle,
	// 	disabled,
	// 	ripple,
	// 	variant,
	// 	link,
	// 	color,
	// 	accessibleTouch,
	// } = props;
	// const code = generateSvelteTagCode({
	// 	tag: "Button",
	// 	props: [
	// 		[variant !== "text", `variant="${variant}"`],
	// 		[color !== "primary", `color="${color}"`],
	// 		[iconOnly, `style="padding: 0;"`],
	// 		[customStyle, `class="${getCustomStyleClass(customStyle)}"`],
	// 		[disabled, `disabled`],
	// 		[accessibleTouch, `accessibleTouch`],
	// 		[!ripple, `ripple={false}`],
	// 		[link, `href="javascript:void(0)"`],
	// 	],
	// 	content: source`
	// 		${getLeadingIconCode(props)}
	// 		${iconOnly ? "" : `<Label>Button</Label>`}
	// 		${getTrailingIconCode(props)}
	// 	`,
	// });
	// return removeEmptyLines(code);
}

function getTrailingIconCode(props: ListItemConfigurations): string {
	const { iconOnly, trailingIcon } = props;

	if (iconOnly) {
		return "";
	} else {
		return getIconCode(
			{},
			{
				type: trailingIcon,
				position: "trailing",
				additionalProps: [[iconOnly, `style="margin: 0;"`]],
			}
		);
	}
}
