import type { MenuConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import { getMenuSurfaceCodeProps } from "src/components/configurator/smui-components/menu-surface";

export function script(configurations: MenuConfigurations) {
	// const { separator, role, itemsRows } = configurations;

	const imports = removeEmptyLines(source`
		${getImportCode(["MenuSurface"], "menu-surface")}
		${getImportCode(["Button"], "button")}
	`);

	const code = source`
		<script>
			${imports}

			let open;

			function openMenuSurface() {
				open = true;
			}
		
			function closeMenuSurface() {
				open = false;
			}
		</script>
	`;

	return code;
}

export function template(configurations: MenuConfigurations) {
	const code = generateSvelteTagCode({
		tag: "div",
		content: source`
			<Button on:click={openMenuSurface}>Open Surface</Button>
			${getMenuSurfaceCode(configurations)}
		`,
	});

	return code;
}

function getMenuSurfaceCode(configurations: MenuConfigurations) {
	return generateSvelteTagCode({
		tag: "MenuSurface",
		props: getMenuSurfaceCodeProps(configurations),
		content: source`
			<div>Menu surface content</div>
			<Button on:click={closeMenuSurface}>Close Surface</Button>
		`,
	});
}
