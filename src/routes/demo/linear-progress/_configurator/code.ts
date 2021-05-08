import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import type { LinearProgressConfigurations } from "./types";

export function script(_configurations: LinearProgressConfigurations) {
	const code = source`
		<script>
			${getImportCode(["LinearProgress"], "linear-progress")}
		</script>
	`;

	return removeEmptyLines(code);
}

export function template(configurations: LinearProgressConfigurations) {
	const { buffer, closed, progress, reversed } = configurations;

	const code = generateSvelteTagCode({
		tag: "LinearProgress",
		props: [
			[closed, "closed"],
			[reversed, "reversed"],
			[buffer, `buffer={${buffer}}`],
			[progress, `progress={${progress}}`],
		],
	});

	return removeEmptyLines(code);
}
