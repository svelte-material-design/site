import type { ListConfigurations } from "./types";
import { source } from "common-tags";
import { getImportCode, removeEmptyLines } from "src/components/configurator";
import {
	createListCode,
	getListImportsMap,
} from "src/components/configurator/smui-components/list";

export function script(configurations: ListConfigurations) {
	const { role } = configurations;

	const map = getListImportsMap({
		configurations,
	});

	const imports = removeEmptyLines(getImportCode(Object.values(map), "list"));

	const code = role
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
	const code = createListCode(configurations);

	return code;
}
