import type { ChipConfigurations, ChipSetConfigurations } from "./types";
import { codeBlock, source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import type {
	Position,
	IconType,
} from "src/components/configurator/smui-components/icons";
import { getIconCode } from "src/components/configurator/smui-components/icons";

export function script(configurations: ChipSetConfigurations) {
	const imports = removeEmptyLines(
		getImportCode(
			["TabBar", "Tab", "Label", "Content", "TabIndicator", "Icon"],
			"tab-bar"
		)
	);

	const code = source`
		<script>
			${imports}

			let value;
		</script>`;

	return code;
}

export function template(configurations: ChipConfigurations) {
	const {
		focusOnActivate,
		activateOnKeyboardNavigation,
		transition,
		nullable,
	} = configurations;

	const code = generateSvelteTagCode({
		tag: "TabBar",
		props: [
			"bind:value",
			[!focusOnActivate, `focusOnActivate={${focusOnActivate}}`],
			[
				!activateOnKeyboardNavigation,
				`activateOnKeyboardNavigation={${activateOnKeyboardNavigation}}`,
			],
			[transition !== "slide", `transition="${transition}"`],
			[nullable, `nullable`],
		],
		content: source`
			${configurations.items.map((tab) => getChipCode(tab)).join("\n")}
		`,
	});

	return removeEmptyLines(code);
}

function getChipCode(configurations: ChipConfigurations) {
	const {
		selected,
		value,
		ripple,
		accessibleTouch,
		trailingIcon,
		leadingIcon,
		label,
		action,
	} = configurations;

	let textCode = `<Text>${label}</Text>`;

	let contentCode = action
		? source`
		<Action>
			${textCode}
		</Action>
	`
		: textCode;

	const code = generateSvelteTagCode({
		tag: "Action",
		props: [
			[selected, "selected"],
			`value="${value}"`,
			[!ripple, `ripple={${ripple}}`],
			[accessibleTouch, "accessibleTouch"],
		],
		content: source`
			${getTabIconCode(trailingIcon, "leading")}
			${contentCode}
			${getTabIconCode(leadingIcon, "trailing")}
		`,
	});

	return code;
}

function getTabIconCode(type: IconType, position: Position) {
	if (type) {
		return getIconCode(
			{},
			{
				type,
				position,
			}
		);
	}

	return "";
}
