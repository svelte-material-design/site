import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import type { IndeterminateLinearProgressConfigurations } from "./types";

export function script(
	_configurations: IndeterminateLinearProgressConfigurations
) {
	const code = source`
		<script>
			${getImportCode(["IndeterminateLinearProgress"], "linear-progress")}
		</script>
	`;

	return removeEmptyLines(code);
}

export function template(
	configurations: IndeterminateLinearProgressConfigurations
) {
	const { closed, reversed } = configurations;

	const code = generateSvelteTagCode({
		tag: "IndeterminateLinearProgress",
		props: [
			[closed, "closed"],
			[reversed, "reversed"],
		],
	});

	return removeEmptyLines(code);
}
