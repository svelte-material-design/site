import type { ListItemConfigurations, ListConfigurations } from "./types";
import { source } from "common-tags";
import { getImportCode, removeEmptyLines } from "src/components/configurator";
import { getIconCode } from "src/components/configurator/smui-components/icons";
import { createListCode } from "src/components/configurator/smui-components/list";

export function script(configurations: ListConfigurations) {
	const { separator, role, itemsRows } = configurations;

	const icon = configurations.items.some(
		(item) => item.leadingIcon || item.trailingIcon
	);

	const imports = removeEmptyLines(
		getImportCode(
			[
				"List",
				[separator, "Separator"],
				"Content",
				"Item",
				[icon, "Icon"],
				[itemsRows > 1, "PrimaryText"],
				[itemsRows > 1, "SecondaryText"],
				[role === "radiogroup", "Radio"],
				[role === "group", "Checkbox"],
			],
			"list"
		)
	);

	const code =
		role !== "list"
			? source`
		<script>
			${imports}

			let value;
		</script>
	`
			: source`
		<script>
			${imports}
		</script>
	`;

	return code;
}

export function template(configurations: ListConfigurations) {
	const code = createListCode(
		{
			tag: "List",
		},
		configurations
	);

	return code;
}
