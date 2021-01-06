import { ButtonConfigurations, CustomStyle } from "../types";
import { source } from "common-tags";
import {
	generateSCSSCode,
	generateSvelteTagCode,
	getModulePath,
	removeEmptyLines,
} from "src/components/configurator";
import { getIconCode } from "src/components/configurator/smui-components/icons";
import { filterStringList } from "@svelte-material-design/core/common/functions";

export function script(props: ButtonConfigurations) {
	const { iconOnly, leadingIcon, trailingIcon } = props;

	const imports = filterStringList([
		"Button",
		[!iconOnly, "Label"],
		[leadingIcon || trailingIcon, "Icon"],
	]).join(",\n");

	const code = source`
		<script>
			import {
				${imports}
			} from "${getModulePath("button")}";
		</script>
	`;

	return removeEmptyLines(code);
}

export function template(props: ButtonConfigurations) {
	const {
		iconOnly,
		customStyle,
		disabled,
		ripple,
		variant,
		link,
		secondary,
	} = props;

	const code = generateSvelteTagCode({
		tag: "Button",
		props: [
			[iconOnly, `style="padding: 0;"`],
			[customStyle, `class="${getCustomStyleClass(customStyle)}"`],
			[disabled, `disabled`],
			[!ripple, `ripple={false}`],
			[variant, `variant="${variant}"`],
			[link, `href="javascript:void(0)"`],
			[secondary, `color="secondary"`],
		],
		content: source`
			${getLeadingIconCode(props)}
			${iconOnly ? "" : `<Label>Button</Label>`}
			${getTrailingIconCode(props)}
		`,
	});

	return removeEmptyLines(code);
}

export function getCustomStyleClass(selectedCustomStyle: CustomStyle) {
	if (selectedCustomStyle === "mdc-mixins") return "button-shaped-round";
	else if (selectedCustomStyle === "custom-css") return "button-shaped-notch";
	else return null;
}

function getLeadingIconCode(props: ButtonConfigurations): string {
	const { iconOnly, leadingIcon } = props;

	return getIconCode(
		{},
		{
			type: leadingIcon,
			position: "leading",
			additionalProps: [[iconOnly, `style="margin: 0;"`]],
		}
	);
}

function getTrailingIconCode(props: ButtonConfigurations): string {
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

export function scss(props: ButtonConfigurations) {
	const { customStyle } = props;

	let content: string = "";

	if (customStyle === "mdc-mixins") {
		content = `
				@use "@material/button";
				
				.${getCustomStyleClass(customStyle)} {
					@include button.shape-radius(999px);
				}
			`;
	} else if (customStyle === "custom-css") {
		content = `
				.${getCustomStyleClass(customStyle)} {
					--notchSize: #{shape.$small-component-radius * 2};

					// source: https://css-tricks.com/notched-boxes/
					-webkit-clip-path: polygon(
						0% var(--notchSize),
						var(--notchSize) 0%,
						calc(100% - var(--notchSize)) 0%,
						100% var(--notchSize),
						100% calc(100% - var(--notchSize)),
						calc(100% - var(--notchSize)) 100%,
						var(--notchSize) 100%,
						0% calc(100% - var(--notchSize))
					);
					clip-path: polygon(
						0% var(--notchSize),
						var(--notchSize) 0%,
						calc(100% - var(--notchSize)) 0%,
						100% var(--notchSize),
						100% calc(100% - var(--notchSize)),
						calc(100% - var(--notchSize)) 100%,
						var(--notchSize) 100%,
						0% calc(100% - var(--notchSize))
					);
				}
			`;
	}

	return generateSCSSCode({ content });
}
