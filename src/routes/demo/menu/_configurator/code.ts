import type { MenuConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import { getMenuSurfaceParentProps } from "src/components/configurator/smui-components/menu-surface";
import { createListContentCode } from "src/components/configurator/smui-components/list";
import { getMenuPropsMap } from "src/components/configurator/smui-components/menu/code";

export function script(configurations: MenuConfigurations) {
	const { separator, role, itemsRows, selectionType } = configurations;

	const icon = configurations.items.some(
		(item) => item.leadingIcon || item.trailingIcon
	);

	const imports = removeEmptyLines(source`
		${getImportCode(
			[
				"Menu",
				[separator, "Separator"],
				"Content",
				"Item",
				[icon, "Icon"],
				[itemsRows > 1, "PrimaryText"],
				[itemsRows > 1, "SecondaryText"],
				[role === "radiogroup", "Radio"],
				[role === "group", "Checkbox"],
			],
			"menu"
		)}
		${getImportCode(["Button"], "button")}
	`);

	const code = source`
		<script>
			${imports}

			${removeEmptyLines(source`
				let open;
				${selectionType ? "let value;" : ""}
			`)}

			function openMenu() {
				open = true;
			}
		</script>
	`;

	return code;
}

export function template(configurations: MenuConfigurations) {
	const code = generateSvelteTagCode({
		tag: "div",
		props: getMenuSurfaceParentProps(configurations),
		content: source`
			<Button on:click={openMenu}>Open Menu</Button>
			${getMenuCode(configurations)}
		`,
	});

	return code;
}

function getMenuCode(configurations: MenuConfigurations) {
	const map = getMenuPropsMap(configurations);

	const code = generateSvelteTagCode({
		tag: "Menu",
		props: Object.values(map),
		content: createListContentCode(configurations),
	});

	return removeEmptyLines(code);
}
