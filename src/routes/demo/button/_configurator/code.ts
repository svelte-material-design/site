import type { ButtonConfigurations, CustomStyle } from "./types";
import { source } from "common-tags";
import {
	generateSCSSCode,
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import { getIconCode } from "src/components/configurator/smui-components/icons";

export function script(props: ButtonConfigurations) {
	const { iconOnly, leadingIcon, trailingIcon } = props;

	const code = source`
		<script>
			${getImportCode(
				[
					"Button",
					[!iconOnly, "Label"],
					[leadingIcon, "LeadingIcon"],
					[trailingIcon, "TrailingIcon"],
				],
				"button"
			)}
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
		color,
		accessibleTouch,
	} = props;

	const code = generateSvelteTagCode({
		tag: "Button",
		props: [
			[variant !== "text", `variant="${variant}"`],
			[color !== "primary", `color="${color}"`],
			[iconOnly, `style="padding: 0;"`],
			[customStyle, `class="${getCustomStyleClass(customStyle)}"`],
			[disabled, `disabled`],
			[accessibleTouch, `accessibleTouch`],
			[!ripple, `ripple={false}`],
			[link, `href="javascript:void(0)"`],
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

	let code: string;
	if (leadingIcon) {
		const iconCode = getIconCode(
			{},
			{
				type: leadingIcon,
				position: "leading",
				additionalProps: [[iconOnly, `style="margin: 0;"`]],
			}
		);

		code = source`
			<svelte:fragment slot="leading">
				${iconCode}
			</svelte:fragment>
		`;
	}

	return code;
}

function getTrailingIconCode(props: ButtonConfigurations): string {
	const { iconOnly, trailingIcon } = props;

	let code: string;
	if (iconOnly) {
		code = "";
	} else if (trailingIcon) {
		const iconCode = getIconCode(
			{},
			{
				type: trailingIcon,
				position: "trailing",
				additionalProps: [[iconOnly, `style="margin: 0;"`]],
			}
		);

		code = source`
			<svelte:fragment slot="trailing">
				${iconCode}
			</svelte:fragment>
		`;
	}

	return code;
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
