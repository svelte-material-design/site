import type { ListBoxConfigurations } from "./types";
import { source } from "common-tags";
import { getImportCode, removeEmptyLines } from "src/components/configurator";
import { createListBoxCode } from "src/components/configurator/smui-components/list";

export function script(configurations: ListBoxConfigurations) {
	const { separator, role, itemsRows } = configurations;

	const icon = configurations.items.some(
		(item) => item.leadingIcon || item.trailingIcon
	);

	const imports = removeEmptyLines(
		getImportCode(
			[
				"ListBox",
				[separator, "Separator"],
				"Content",
				"Item",
				[icon, "Icon"],
				[itemsRows > 1, "PrimaryText"],
				[itemsRows > 1, "SecondaryText"],
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

export function template(configurations: ListBoxConfigurations) {
	const code = createListBoxCode(configurations);

	return code;
}
