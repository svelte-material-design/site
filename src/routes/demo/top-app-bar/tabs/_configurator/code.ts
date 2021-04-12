import type { TabConfigurations, TabBarConfigurations } from "./types";
import { source } from "common-tags";
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

export function script(configurations: TabBarConfigurations) {
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

export function template(configurations: TabBarConfigurations) {
	const {
		focusOnActivate,
		activateOnKeyboardNavigation,
		transition,
	} = configurations;

	const code = generateSvelteTagCode({
		tag: "TabBar",
		props: [
			"bind:active",
			[!focusOnActivate, `focusOnActivate={${focusOnActivate}}`],
			[
				!activateOnKeyboardNavigation,
				`activateOnKeyboardNavigation={${activateOnKeyboardNavigation}}`,
			],
			[transition !== "slide", `transition="${transition}"`],
		],
		content: source`
			${configurations.items.map((tab) => getTabCode(tab)).join("\n")}
		`,
	});

	return removeEmptyLines(code);
}

function getTabCode(configurations: TabConfigurations) {
	const {
		active,
		key,
		ripple,
		stacked,
		useMinWidth,
		tabIndicatorPosition,
		trailingIcon,
		leadingIcon,
		label,
	} = configurations;

	const code = generateSvelteTagCode({
		tag: "Tab",
		props: [
			[active, "active"],
			`key="${key}"`,
			[!ripple, `ripple={${ripple}}`],
			[stacked, "stacked"],
			[useMinWidth, "useMinWidth"],
		],
		content: source`
			<Content>
				${getTabIconCode(leadingIcon, "leading")}
				<Label>${label}</Label>
				${getTabIconCode(trailingIcon, "trailing")}
				${tabIndicatorPosition === "label" ? "<TabIndicator />" : ""}
			</Content>
			${tabIndicatorPosition === "tab" ? "<TabIndicator />" : ""}
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
