import { source } from "common-tags";
import {
	generateSvelteTagCode,
	removeEmptyLines,
} from "src/components/configurator";
import { getIconCode } from "src/components/configurator/smui-components/icons";
import type {
	IconType,
	Position,
} from "src/components/configurator/smui-components/icons";
import type { TabBarConfigurations, TabConfigurations } from "./types";

export const script = `
<script>
	import {
		TabBar,
		Tab,
		Label,
		Content,
		TabIndicator,
		Icon } from "@smui/core/tab-bar";
</script>
`;

export function template(
	props: TabBarConfigurations,
	tabs: TabConfigurations[]
) {
	const { focusOnActivate, activateOnKeyboardNavigation, transition } = props;

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
			${tabs.map((tab) => getTabCode(tab)).join("\n")}
		`,
	});

	return removeEmptyLines(code);
}

function getTabCode(props: TabConfigurations) {
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
	} = props;

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
