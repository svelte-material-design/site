import { IconButtonToggleConfigurations } from "./types";
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
			${getImportCode(
				["IconButtonToggle", "IconOn", "IconOff"],
				"icon-button-toggle"
			)} 

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
			[color !== "inherit", `color="${color}"`],
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

	let content: string;
	if (iconType === "material-icon") {
		content = tag === "IconOn" ? "star" : "star_border";
	} else if (iconType === "svg" && tag === "IconOff") {
		content = source`
			<circle cx="12" cy="12" r="10"
				fill="transparent" stroke-width="2" stroke="black" />
	`;
	}

	return getCommonIconCode(
		{
			tag,
			content,
			props:
				iconType === "img" && tag === "IconOff"
					? [`src="/icons/emojis/grinning-face.png"`, `alt="Grinning face"`]
					: null,
		},
		{
			type: iconType,
		}
	);
}
